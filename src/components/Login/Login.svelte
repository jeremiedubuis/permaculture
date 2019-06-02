<script>
    let email = '';
    let password = '';

    function login(e) {
        e.preventDefault();
        console.log(email, password)
        fetch('api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'content-type': 'application/json'}
        });
    }

</script>

<form on:submit={login}>
    <div>
        <label for="login-email">
            E-mail
        </label>
        <input type="email" name="email" id="login-email" bind:value={email} />
    </div>
    <div>
        <label for="login-password">
            Password
        </label>
        <input type="password" name="password" id="login-password" bind:value={password} />
    </div>

    <input type="submit" />
</form>
