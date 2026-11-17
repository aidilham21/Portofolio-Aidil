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
) else (
    echo.
    echo ===================================================
    echo   [CATATAN] Push ke remote gagal atau butuh otentikasi.
    echo   1. Pastikan Anda sudah login GitHub di browser / Credential Manager.
    echo   2. Jika repo di GitHub sudah memiliki commit awal,
    echo      jalankan pull.bat atau:
    echo      git pull origin %CURRENT_BRANCH% --allow-unrelated-histories
    echo ===================================================
)

:END
echo.
pause
