@echo off
call npm create vite@latest temp_app -- --template react
move temp_app\* .
move temp_app\.gitignore .
move temp_app\.eslintrc.cjs .
rmdir temp_app /s /q
call npm install
call npm install react-router-dom framer-motion react-icons
