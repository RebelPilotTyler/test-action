const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    try {
        const GITHUB_PAT = process.env.GITHUB_PAT; // Securely access your GitHub PAT
        const response = await fetch('https://api.github.com/repos/RebelPilotTyler/test-action/dispatches', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GITHUB_PAT}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event_type: 'update-json', // This must match your GitHub Actions workflow
            }),
        });

        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Workflow triggered successfully!' }),
            };
        } else {
            const error = await response.json();
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Error triggering workflow', error }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Server error', error }),
        };
    }
};
