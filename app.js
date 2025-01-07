document.getElementById('increment-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('/.netlify/functions/triggerWorkflow', {
            method: 'POST',
        });

        if (response.ok) {
            alert('Workflow triggered successfully!');
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert('Error triggering workflow.');
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        alert('Unexpected error occurred.');
    }
});
