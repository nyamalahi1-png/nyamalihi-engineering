/**
 * NYAMALIHI ENGINEERING LTD
 * Main JavaScript — Dynamic data loader from projects.json
 * 
 * HOW TO UPDATE: Edit /data/projects.json — the website updates automatically.
 */

let siteData = null;

// ─── LOAD DATA ──────────────────────────────────────────────────────────────
async function loadSiteData() {
    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) throw new Error('Failed to load data');
        siteData = await response.json();
        return siteData;
    } catch (error) {
        console.error('Error loading site data:', error);
        return null;
    }
}

// ─── RENDER HERO STATS ───────────────────────────────────────────────────────
function renderHeroStats(data) {
    const stats = data.company.stats;
    const el = document.getElementById('hero-stats');
    if (!el) return;
    el.innerHTML = `
        <div class="stat-item">
            <span class="stat-number" data-count="${stats.projects_completed}">0</span>
            <span class="stat-label">Projects Completed</span>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-count="${stats.km_roads_built}">0</span>
            <span class="stat-label">KM of Roads Built</span>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-count="${stats.buildings_constructed}">0</span>
            <span class="stat-label">Buildings Constructed</span>
        </div>
    `;
    // Animate numbers
    animateCounters();
}

// ─── RENDER STATS SECTION ────────────────────────────────────────────────────
function renderStatsSection(data) {
    const stats = data.company.stats;
    const el = document.getElementById('stats-grid');
    if (!el) return;
    el.innerHTML = `
        <div class="stat-card fade-up">
            <div class="stat-icon">🏗️</div>
            <span class="stat-number" data-count="${stats.projects_completed}">0</span>
            <span class="stat-label">Projects Completed</span>
        </div>
        <div class="stat-card fade-up">
            <div class="stat-icon">🛣️</div>
            <span class="stat-number" data-count="${stats.km_roads_built}">0</span>
            <span class="stat-label">KM Roads Built</span>
        </div>
        <div class="stat-card fade-up">
            <div class="stat-icon">🏢</div>
            <span class="stat-number" data-count="${stats.buildings_constructed}">0</span>
            <span class="stat-label">Buildings Constructed</span>
        </div>
        <div class="stat-card fade-up">
            <div class="stat-icon">📅</div>
            <span class="stat-number" data-count="${stats.years_experience}">0</span>
            <span class="stat-label">Years Experience</span>
        </div>
    `;
}

// ─── RENDER SERVICES ─────────────────────────────────────────────────────────
function renderServices(data) {
    const el = document.getElementById('services-grid');
    if (!el) return;
    el.innerHTML = data.services.map(s => `
        <div class="service-card fade-up">
            <div class="service-icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.description}</p>
        </div>
    `).join('');
}

// ─── RENDER PROJECTS ─────────────────────────────────────────────────────────
function renderProjects(data, filter = 'all') {
    const el = document.getElementById('projects-grid');
    if (!el) return;

    let projects = data.projects;
    if (filter !== 'all') {
        projects = projects.filter(p => p.category === filter);
    }

    if (projects.length === 0) {
        el.innerHTML = '<p style="text-align:center;color:var(--concrete-gray);grid-column:1/-1;padding:3rem">No projects found in this category yet.</p>';
        return;
    }

    el.innerHTML = projects.map(project => {
        const imageHTML = project.image
            ? `<img src="${project.image}" alt="${project.title}" onerror="this.parentElement.innerHTML='<div class=\\'project-placeholder\\'>${project.image_placeholder}</div>'">`
            : `<div class="project-placeholder">${project.image_placeholder}</div>`;

        const statusClass = project.status === 'Completed' ? 'status-completed' : 'status-ongoing';

        return `
        <div class="project-card fade-up" data-category="${project.category}">
            <div class="project-image">
                ${imageHTML}
                <span class="project-category-badge">${project.category === 'roads' ? '🛣️ Roads' : '🏗️ Buildings'}</span>
                <span class="project-status-badge ${statusClass}">${project.status}</span>
            </div>
            <div class="project-info">
                <div class="project-meta">
                    <span>📍 ${project.location}</span>
                    <span>📅 ${project.year}</span>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-specs">${project.specs}</div>
            </div>
        </div>
        `;
    }).join('');

    // Re-trigger animations
    observeAnimations();
}

// ─── RENDER TEAM ─────────────────────────────────────────────────────────────
function renderTeam(data) {
    const el = document.getElementById('team-grid');
    if (!el) return;
    el.innerHTML = data.team.map(member => {
        const photoHTML = member.image
            ? `<img src="${member.image}" alt="${member.name}" onerror="this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>👷</div>'">`
            : `<div style="font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%">👷</div>`;

        return `
        <div class="team-card fade-up">
            <div class="team-photo">${photoHTML}</div>
            <div class="team-info">
                <h3>${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-quals">${member.qualifications}</p>
            </div>
        </div>
        `;
    }).join('');
}

// ─── POPULATE CONTACT INFO ───────────────────────────────────────────────────
function populateContactInfo(data) {
    const company = data.company;

    // Header company name
    document.querySelectorAll('.company-name').forEach(el => el.textContent = company.name);
    document.querySelectorAll('.company-tagline').forEach(el => el.textContent = company.tagline);

    // Contact items
    const phoneEls = document.querySelectorAll('.contact-phone');
    phoneEls.forEach(el => { el.textContent = company.phone; el.href = `tel:${company.phone}`; });

    const emailEls = document.querySelectorAll('.contact-email');
    emailEls.forEach(el => { el.textContent = company.email; el.href = `mailto:${company.email}`; });

    const addressEls = document.querySelectorAll('.contact-address');
    addressEls.forEach(el => el.textContent = company.address);

    const regEls = document.querySelectorAll('.company-registration');
    regEls.forEach(el => el.textContent = company.registration);
}

// ─── COUNTER ANIMATION ───────────────────────────────────────────────────────
function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const duration = 2000;
        const step = target / (duration / 16);

        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.round(current) + (target >= 100 ? '+' : '');
            if (current >= target) clearInterval(timer);
        }, 16);
    });
}

// ─── PROJECT FILTERS ─────────────────────────────────────────────────────────
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            renderProjects(siteData, filter);
        });
    });
}

// ─── SCROLL ANIMATIONS ───────────────────────────────────────────────────────
function observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger counter animation when stats section is visible
                if (entry.target.closest('#stats-grid')) {
                    animateCounters();
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}

// ─── STICKY HEADER ───────────────────────────────────────────────────────────
function setupStickyHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.3)' : '';
    });
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = '✅ Message Sent!';
            setTimeout(() => {
                btn.textContent = 'Send Message';
                btn.disabled = false;
                form.reset();
            }, 3000);
        }, 1500);
    });
}

// ─── SET ACTIVE NAV ──────────────────────────────────────────────────────────
function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === page || (page === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadSiteData();
    if (!data) {
        document.body.innerHTML = '<div style="padding:4rem;text-align:center;font-family:sans-serif"><h1>⚠️ Could not load site data</h1><p>Make sure data/projects.json exists and the server is running.</p></div>';
        return;
    }

    // Render all dynamic sections
    renderHeroStats(data);
    renderStatsSection(data);
    renderServices(data);
    renderProjects(data);
    renderTeam(data);
    populateContactInfo(data);

    // Setup interactions
    setupFilters();
    setupMobileMenu();
    setupStickyHeader();
    setupContactForm();
    setActiveNav();

    // Trigger animations after render
    setTimeout(observeAnimations, 100);
});
