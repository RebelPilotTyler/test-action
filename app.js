document.getElementById('increment-btn').addEventListener('click', async () => {
    const response = await fetch('https://api.github.com/repos/RebelPilotTyler/test-action/dispatches', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${{ secrets.PAT_TOKEN }}`, // Replace <YOUR_PAT> with your token or use secrets
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            event_type: 'update-json',
        }),
    });

    if (response.ok) {
        alert('Counter updated!');
    } else {
        alert('Error updating counter.');
    }
});
