export const COMPILER_SEQUENCE = {
    prompt: 'portfolio>> ',
    command: 'javac murugan.java',
    debugCommand: 'javac -g murugan.java',
    compiling: '[Compiling...] ⚙️',
    success: '✅ Compilation successful!',
    running: 'java murugan',
    welcome: `
Welcome to my Portfolio 🚀
Initializing Experience...
────────────────────────────
Name: Murugan
Role: Full-Stack Developer
Experience: 1.7 years
Skills: Java | React | SQL | Spring Boot
Current Project: Tripuu (Travel Planning App)
Company: Pranion Tech
────────────────────────────
portfolio>> `,
    timing: {
        typingSpeed: 80, // ms per character
        compilationDuration: 2000, // ms
        successDelay: 1000, // ms before showing welcome message
    },
};
