# Birjesh Gupta - Portfolio Website

A modern, responsive single-page portfolio showcasing my skills, projects, education, and achievements as a Full-Stack Developer and B.Tech Electrical Engineering student at MNNIT Allahabad.

## 🌟 Features

- **Responsive Design**: Mobile-first layout with Tailwind CSS and light/dark mode toggle
- **Smooth Navigation**: React Scroll powered seamless section navigation
- **Rich Animations**: Framer Motion fade-ins, hovers, and smooth transitions
- **Project Showcase**: Interactive modal cards for VidyaSetu and RecycleHub with GitHub links and tech badges
- **Skills Section**: Categorized technical skills across programming languages, databases, frameworks, and domain knowledge
- **Education Timeline**: Academic journey with CPI and achievements
- **Experience & Leadership**: Positions of responsibility in student organizations
- **Achievements**: Awards, competitive programming rankings, and milestone statistics
- **Coding Profiles**: Direct links to LeetCode, Codeforces, and CodeChef profiles
- **Contact Information**: Email, phone, location, and GitHub links with working actions
- **Resume Download**: Direct PDF download from multiple locations
- **SEO Optimized**: Meta tags and Open Graph for social sharing

## 🛠️ Tech Stack

- **Frontend**: React.js 18, Tailwind CSS 3, Framer Motion
- **Icons & UI**: React Icons, React Scroll
- **Styling**: Tailwind CSS with custom gradients and animations
- **Package Manager**: npm

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📋 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation with dark mode toggle
│   ├── Hero.js            # Landing section with CTA buttons
│   ├── About.js           # About me and contact info
│   ├── Education.js       # Education timeline
│   ├── Projects.js        # Project cards with modals
│   ├── Skills.js          # Technical skills by category
│   ├── Achievements.js    # Awards and milestones
│   ├── Experience.js      # Leadership positions
│   ├── CodingProfiles.js  # Competitive programming links
│   ├── Contact.js         # Contact section with resume download
│   └── Footer.js          # Footer with social links
├── App.js                 # Main component
├── App.css                # Global styles
└── index.js               # React entry point

public/
├── resume/
│   └── Birjesh_Gupta_Resume.pdf  # Downloadable resume
└── index.html
```

## 🎯 Key Sections

### Projects
- **VidyaSetu**: Secure login with OAuth, dynamic timetable, academic dashboard, real-time chat with Socket.IO
- **RecycleHub**: Scrap pickup scheduling, multi-profile management, Razorpay payment integration

### Skills
- **Programming Languages**: C++, JavaScript, SQL
- **Databases & Tools**: MongoDB, GitHub, Git, VSCode
- **Technologies**: ReactJS, NodeJS, ExpressJS
- **Domain Knowledge**: OOP, DBMS, Operating Systems, Computer Networking

### Achievements
- Aviskar 2k24 - 2nd Runner Up in Dev or Die hackathon
- 1000+ problems solved across coding platforms
- Knight rank on LeetCode, Pupil on Codeforces, 3-Star on CodeChef

## 🔗 Links

- **GitHub**: [@Birjesh0000](https://github.com/Birjesh0000)
- **LeetCode**: [@gbirjesh0000](https://leetcode.com/u/gbirjesh0000/)
- **Codeforces**: [@brijesh0000](https://codeforces.com/profile/brijesh0000)
- **CodeChef**: [@gbirjesh_0000](https://www.codechef.com/users/gbirjesh_0000)
- **Email**: gbirjesh0000@gmail.com
- **Phone**: +91-8081955858
- **Location**: Prayagraj, Uttar Pradesh

## 📱 Deployment

The portfolio can be deployed on:
- GitHub Pages
- Vercel
- Netlify

Update the `homepage` field in `package.json` with your deployment URL before pushing to production.

## 🎨 Customization

### Colors & Gradients
Tailwind CSS classes are used throughout. Modify gradient colors in component files to match your theme.

### Resume
Place your resume PDF at `/public/resume/Birjesh_Gupta_Resume.pdf`

### Profile Image
Add your profile image at `/public/profile_4.jpg` for the Hero section

## 📝 License

This portfolio is open source and available for educational purposes.

---

**Made with ❤️ and ☕ by Birjesh Gupta**