@echo off
if not exist src\assets\img mkdir src\assets\img
xcopy legacy_backup\img src\assets\img /E /I /Y
