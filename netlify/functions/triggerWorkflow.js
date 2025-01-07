import fetch from 'node-fetch';

export async function handler(event, context) {
    try {
        const GITHUB_PAT = process.env.GITHUB_PAT; // Access the PAT securely
        const response = await fetch('https://api.github.com/repos/RebelPilotTyler/test-action/dispatches', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GITHUB_PAT}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event_type: 'update-json', // Must match the workflow
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
}
