document.getElementById('contact-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contactNumber = (document.getElementById('contact-number') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    const formData = {
        name,
        email,
        contactNumber,
        subject,
        message
    };

    try {
        const response = await fetch('https://6715fa9133bc2bfe40bbcc65.mockapi.io/xyz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            alert("The object has successfully been submitted at the MockAPI. The result returned by MockAPI is logged in console and in the alert box here as follows: " + JSON.stringify(result));
            document.getElementById('status')!.textContent = 'Form submitted successfully!';
        } else {
            document.getElementById('status')!.textContent = 'Failed to submit the form.';
        }
    } catch (error) {
        document.getElementById('status')!.textContent = 'Error occurred while submitting the form.';
    }
});
