document.getElementById('increment-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.github.com/repos/RebelPilotTyler/test-action/dispatches', {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event_type: 'update-json',
            }),
        });

        if (response.ok) {
            alert('Request sent successfully!');
        } else {
            const errorData = await response.json(); // Safely handle JSON parsing errors
            console.error('Error:', errorData);
            alert('Error triggering GitHub Actions.');
        }
    } catch (error) {
        console.error('Unexpected Error:', error);
        alert('Unexpected error occurred.');
    }
});
