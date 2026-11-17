@echo off
setlocal enabledelayedexpansion
title Push to GitHub - Portofolio-Aidil

echo ===================================================
echo   PORTFOLIO GIT PUSH AUTOMATION
echo   Repo: https://github.com/aidilham21/Portofolio-Aidil
echo ===================================================
echo.

:: 1. Verifikasi instalasi Git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git tidak terdeteksi di PATH sistem.
    echo Pastikan Git sudah terinstall di komputer Anda.
    goto END
)

:: 2. Inisialisasi repo jika belum ada
if not exist ".git" (
    echo [INFO] Inisialisasi repositori Git lokal...
    git init -b main
)

:: 3. Verifikasi remote origin
git remote get-url origin >nul 2>nul
if %errorlevel% neq 0 (
    echo [INFO] Mengaitkan remote origin ke GitHub...
    git remote add origin https://github.com/aidilham21/Portofolio-Aidil.git
) else (
    git remote set-url origin https://github.com/aidilham21/Portofolio-Aidil.git
)

:: 4. Deteksi branch aktif
for /f "tokens=*" %%b in ('git branch --show-current 2^>nul') do set CURRENT_BRANCH=%%b
if "%CURRENT_BRANCH%"=="" set CURRENT_BRANCH=main
if "%CURRENT_BRANCH%"=="HEAD" set CURRENT_BRANCH=main
if "%CURRENT_BRANCH%"=="master" (
    echo [INFO] Mengubah default branch master ke main...
    git branch -M main
    set CURRENT_BRANCH=main
)

echo [STATUS] Branch aktif: %CURRENT_BRANCH%
echo.

:: 5. Status file saat ini
echo [STATUS] Perubahan file saat ini:
git status --short
echo.

:: 6. Input commit message
set "COMMIT_MSG=%*"
if "%COMMIT_MSG%"=="" (
    set /p "COMMIT_MSG=Masukkan pesan commit (tekan Enter untuk default): "
)

if "%COMMIT_MSG%"=="" (
    set COMMIT_MSG=Update portofolio: %date% %time%
)

echo.
echo [1/3] Menambahkan semua perubahan ke staging (git add -A)...
git add -A

echo [2/3] Membuat commit ("%COMMIT_MSG%")...
git commit -m "%COMMIT_MSG%"
if %errorlevel% neq 0 (
    echo [INFO] Tidak ada perubahan baru untuk di-commit.
)

echo.
echo [3/3] Melakukan push ke origin %CURRENT_BRANCH%...
git push -u origin %CURRENT_BRANCH%

if %errorlevel% equ 0 (
    echo.
    echo ===================================================
    echo   [SUKSES] Perubahan berhasil di-push ke GitHub!
    echo ===================================================
    goto END
)

:: Penanganan jika Push ditolak oleh GitHub (misal karena remote memiliki commit awal)
echo.
echo ===================================================
echo   [PERINGATAN] Push ditolak oleh GitHub (fetch first)!
echo   Penyebab: Repositori di GitHub sudah memiliki commit
echo   awal (misal saat buat repo mencentang "Add a README").
echo ===================================================
echo.
echo   Pilih solusi penanganan:
echo   [1] FORCE PUSH (Timpa repositori GitHub dengan portofolio lokal)
echo       * Sangat disarankan jika repo GitHub baru dibuat dan
echo         isinya hanya file template / placeholder awal.
echo.
echo   [2] PULL ^& MERGE (Tarik commit remote dan gabungkan ke lokal)
echo       * Gunakan ini jika di GitHub terdapat file/riwayat yang
echo         tidak boleh hilang.
echo.
echo   [3] Batalkan operasi
echo.
set /p "CHOICE=Pilihan Anda [1/2/3]: "

if "!CHOICE!"=="1" (
    echo.
    echo Menjalankan Force Push ke origin %CURRENT_BRANCH%...
    git push -u origin %CURRENT_BRANCH% --force
    if !errorlevel! equ 0 (
        echo.
        echo ===================================================
        echo   [SUKSES] Portofolio lokal berhasil di-push ke GitHub!
        echo ===================================================
    ) else (
        echo.
        echo [GAGAL] Force push gagal. Pastikan login GitHub Anda memiliki hak akses write.
    )
) else if "!CHOICE!"=="2" (
    echo.
    echo Menarik commit dari remote dengan --allow-unrelated-histories...
    git pull origin %CURRENT_BRANCH% --allow-unrelated-histories --no-rebase
    if !errorlevel! equ 0 (
        echo.
        echo Penggabungan berhasil. Melakukan push ulang...
        git push -u origin %CURRENT_BRANCH%
        if !errorlevel! equ 0 (
            echo.
            echo ===================================================
            echo   [SUKSES] Perubahan berhasil di-push ke GitHub!
            echo ===================================================
        )
    ) else (
        echo.
        echo [CATATAN] Terjadi konflik saat penggabungan file.
        echo Silakan buka file yang berkonflik (misal README.md), simpan,
        echo lalu jalankan push.bat kembali.
    )
) else (
    echo.
    echo Operasi push dibatalkan.
)

:END
echo.
pause
