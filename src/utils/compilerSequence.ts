
export const SEQUENCE_STEPS = [
    {
        type: 'prompt',
        text: 'portfolio>> ',
        delay: 500,
    },
    {
        type: 'command',
        text: 'javac murugan.java',
        delay: 80,
        displayDuration: 2500,
    },
    {
        type: 'newline',
        delay: 500,
    },
    {
        type: 'output',
        text: '[Compiling...]',
        spinner: true,
        displayDuration: 2500,
        color: 'yellow',
    },
    {
        type: 'newline',
        delay: 300,
    },
    {
        type: 'output',
        text: '✅ Compilation successful.',
        displayDuration: 1500,
        color: 'green',
    },
    {
        type: 'newline',
        delay: 500,
    },
    {
        type: 'prompt',
        text: 'portfolio>> ',
        delay: 300,
    },
    {
        type: 'command',
        text: 'java murugan',
        delay: 80,
        displayDuration: 2000,
    },
    {
        type: 'newline',
        delay: 500,
    },
    {
        type: 'output',
        text: 'Loading...',
        displayDuration: 2000,
        color: 'yellow',
    },
    {
        type: 'debugger',
        title: '🔍 DEBUG MODE: ANALYZING CONDITIONS',
        displayDuration: 4000,
    },
    {
        type: 'output',
        text: '🎉 All conditions success!',
        displayDuration: 2000,
        color: 'green',
    },
    {
        type: 'screen',
        name: 'welcome',
    },
];

export const DEBUG_CONDITIONS = [
    {
        id: 1,
        label: 'Java syntax valid',
        status: 'PASS',
        icon: '✓',
        color: 'green',
    },
    {
        id: 2,
        label: 'React knowledge: 1.7 years',
        status: 'PASS',
        icon: '✓',
        color: 'green',
    },
    {
        id: 3,
        label: 'Full-stack capable',
        status: 'PASS',
        icon: '✓',
        color: 'green',
    },
    {
        id: 4,
        label: 'Problem-solving skills',
        status: 'PASS',
        icon: '✓',
        color: 'green',
    },
    {
        id: 5,
        label: 'Communication effective',
        status: 'PASS',
        icon: '✓',
        color: 'green',
    },
];
