<div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
    }}
>
    <form
        style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        onSubmit={onSubmit}
    >
        <label>Email</label>
        <input
            type="Email"
            value={email}
            onChange={onEmailHandler}
        />
        <label>Password</label>
        <input
            type="Password"
            value={password}
            onChange={onPasswordHandler}
        />
        <br />
        <button type="submit">로그인</button>
    </form>
</div>;


<Content>
<Route
exact
path="/"
component={Auth(
    LandingPage,
    null
)}
></Route>
<Route
exact
path="/login"
component={Auth(
    LoginPage,
    false
)}
></Route>
<Route
exact
path="/register"
component={Auth(
    RegisterPage,
    false
)}
></Route>
</Content>
<Footer
style={{
textAlign: 'center',
}}
>
Ant Design ©2016 Created by
Ant UED
</Footer>