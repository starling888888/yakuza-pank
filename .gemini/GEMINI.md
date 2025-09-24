## Gemini Server Management Rules

- **Background Server Processes**: When executing commands that start a server (e.g., `npm run dev`), always use `run_shell_command` with `&` to run them in the background.
- **Avoid Unnecessary Restarts**: Do not manually kill and restart background server processes unless:
    - A subsequent action (e.g., `web_fetch`, `npx playwright test`) explicitly indicates the server is not running or is in an erroneous state.
    - The server process is consuming excessive resources or causing system instability.
    - The user explicitly requests a restart.
- **Assume Server is Running**: Once a server process is started in the background, assume it is running and accessible until evidence suggests otherwise.
