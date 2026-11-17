@echo off
setlocal enabledelayedexpansion
title Pull from GitHub - Portofolio-Aidil

echo ===================================================
echo   PORTFOLIO GIT PULL AUTOMATION
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
echo [1/1] Menarik perubahan terbaru dari origin %CURRENT_BRANCH%...
git pull origin %CURRENT_BRANCH% --allow-unrelated-histories --no-rebase

if %errorlevel% equ 0 (
    echo.
    echo ===================================================
    echo   [SUKSES] Repositori lokal sudah sinkron dengan GitHub!
    echo ===================================================
) else (
    echo.
    echo ===================================================
    echo   [PERINGATAN] Pull gagal atau terdapat konflik.
    echo   1. Pastikan koneksi internet aktif.
    echo   2. Jika terjadi konflik file (conflict), buka file tersebut,
    echo      selesaikan perbedaan, lalu jalankan push.bat.
    echo ===================================================
)

:END
echo.
pause
