// Login page component
const LoginPage = {
    render() {
        return `
            <div class="login-container">
                <div class="login-card">
                    <div class="login-header">
                        <h1>Intern Dashboard</h1>
                        <p>Welcome back! Please sign in to continue.</p>
                    </div>
                    
                    <form class="login-form" id="loginForm">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email">
                        </div>
                        
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required placeholder="Enter your password">
                        </div>
                        
                        <button type="submit" class="login-btn">Sign In</button>
                        
                        <div class="login-divider">
                            <span>or</span>
                        </div>
                        
                        <button type="button" class="signup-btn" id="signupBtn">Create Account</button>
                    </form>
                    
                    <div class="demo-credentials">
                        <p><strong>Demo Credentials:</strong></p>
                        <p>Email: demo@intern.com</p>
                        <p>Password: demo123</p>
                    </div>
                </div>
            </div>
        `;
    },
    
    init() {
        const form = document.getElementById('loginForm');
        const signupBtn = document.getElementById('signupBtn');
        
        form.addEventListener('submit', this.handleLogin);
        signupBtn.addEventListener('click', this.handleSignup);
    },
    
    handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple dummy authentication - any email/password works
        if (email && password) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', email);
            
            // Show loading state
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Signing in...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                router.navigate('/dashboard');
            }, 1000);
        } else {
            alert('Please enter both email and password');
        }
    },
    
    handleSignup() {
        // For demo purposes, just show an alert and redirect to login
        alert('Account created successfully! You can now sign in with any email/password.');
    }
};

// Register route
router.addRoute('/login', () => {
    document.getElementById('app').innerHTML = LoginPage.render();
    LoginPage.init();
});

router.addRoute('/', () => {
    router.navigate('/login');
});