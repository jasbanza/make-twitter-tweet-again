@echo off

REM Current directory
set "baseDirectory=%CD%"

REM Replace "C:\path\to\your\src\folder" with the actual path to the folder you want to zip
set "srcDir=%baseDirectory%\src"


REM make build directory and navigate there
set "buildDir=%baseDirectory%\build"

if not exist "%buildDir%" (
    mkdir "%buildDir%"
)
pushd "%buildDir%"

set "zipName=extension.zip"

REM Delete the existing zip file if it already exists
if exist "%zipName%" (
    del "%zipName%"
)

REM Change the working directory to the source folder
pushd "%srcDir%"

REM Compress the contents of the folder into a zip archive using the "compress" command
powershell -nologo -noprofile -command "Add-Type -A 'System.IO.Compression.FileSystem'; [IO.Compression.ZipFile]::CreateFromDirectory('%srcDir%', '%buildDir%\%zipName%')"

popd

echo Zip creation completed!
echo.
echo Output: %buildDir%\extension.zip
echo.
pause