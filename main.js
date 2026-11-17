/**
 * ============================================================================
 * MUH. AIDIL ILHAM - 3D INTERACTIVE PORTFOLIO ENGINE (2025)
 * Standard: Impeccable Craft • High Performance WebGL & DOM Architecture
 * ============================================================================
 */

(function () {
    'use strict';

    // State Store
    const state = {
        currentScreen: 'hero',
        sfxEnabled: true,
        screens: ['hero', 'profil', 'project', 'contact'],
        activeFilter: 'all'
    };

    // Project Case Study Database (Deep Technical Details)
    const projectDetails = {
        milltrack: {
            title: 'MillTrack',
            subtitle: 'Sistem Tracking Absensi & Kinerja Operator Stasiun PKS',
            category: 'Web Platform • Enterprise Tracking • cgreen',
            logo: 'assets/projects/milltrack.png',
            preview: 'assets/projects/milltrack_preview.jpg',
            problem: 'Pabrik kelapa sawit (PKS) beroperasi 24 jam dengan rotasi shift ketat pada setiap stasiun (loading ramp, sterilizer, thresher, digester, press, clarifier). Pencatatan absensi manual sering kali tidak akurat, sulit diaudit, dan tidak terhubung langsung dengan evaluasi performa per stasiun operasional.',
            solution: 'Sebagai Co-Founder & Project Manager di cgreen (student software house), memimpin perancangan dan deployment MillTrack: sistem monitoring digital yang mencatat absensi, jam operasional, dan tracking performa operator stasiun secara real-time dengan dashboard analitik berbasis web.',
            techStack: ['Node.js', 'Express', 'React', 'PostgreSQL', 'RESTful API', 'TailwindCSS'],
            role: 'Co-Founder & Project Manager (Arsitektur sistem, delegasi sprint tim developer, supervisi deployment, integrasi database).',
            impact: 'Meningkatkan akurasi pencatatan jam kerja operator hingga 99%, memangkas waktu rekapitulasi performa bulanan, dan meminimalisir kekosongan pengawasan operator pada stasiun kritis pabrik.',
            repo: 'https://github.com/aidilham21'
        },
        geogisa: {
            title: 'GeoGiSa',
            subtitle: 'Smart Palm Agriculture & Soil IoT System Terintegrasi Mobile GIS',
            category: 'Applied IoT • Mobile App • GIS Perkebunan',
            logo: 'assets/projects/geogisa.svg',
            preview: 'assets/projects/geogisa_app_preview.jpg',
            problem: 'Kesuburan tanah dan kadar nutrisi NPK pada areal perkebunan kelapa sawit sangat bervariasi. Pengujian laboratorium konvensional memakan waktu berminggu-minggu, sehingga pemupukan sering tidak presisi dan boros biaya operasional kebun.',
            solution: 'Mengembangkan GeoGiSa: perangkat keras IoT berbasis mikrokontroler dengan probe sensor NPK, pH, kelembaban, dan suhu tanah, yang mengirimkan telemetri langsung ke mobile app berbasis GIS. Petani dan agronomis kebun dapat memetakan zona defisiensi hara secara visual di atas peta spasial.',
            techStack: ['ESP32', 'NPK RS485 Sensor', 'Flutter / Dart Mobile', 'Leaflet / Mapbox GIS', 'MQTT / HTTP REST', 'Python Backend'],
            role: 'Lead IoT & Software Developer (Kalibrasi sensor tanah, firmware ESP32, integrasi komunikasi IoT ke backend, visualisasi peta sebaran nutrisi).',
            impact: 'Menyediakan data real-time kondisi tanah per blok kebun sawit, menghemat waktu diagnosis nutrisi dari hitungan minggu menjadi hitungan detik, serta mendukung pertanian presisi (precision agriculture).',
            repo: 'https://github.com/aidilham21'
        },
        sterilizerhub: {
            title: 'Sterilizer Hub',
            subtitle: 'Sistem Kontrol & Telemetri Stasiun Perebusan (Sterilizer) PKS Berbasis IoT',
            category: 'Industrial IoT • PKS Mill Automation',
            logo: 'assets/projects/sterilizerhub.png',
            problem: 'Stasiun sterilizer merupakan gerbang paling krusial di pabrik kelapa sawit. Tekanan uap (steam pressure) dan suhu perebusan yang tidak stabil dapat mengakibatkan kerusakan buah, losses minyak sawit yang tinggi, atau bahaya keselamatan kerja.',
            solution: 'Membangun Sterilizer Hub: platform telemetri dan pemantauan sensorik yang merekam siklus perebusan (peak 1, 2, 3), suhu, tekanan steam, dan timer buka-tutup pintu sterilizer secara otomatis dengan peringatan visual dan analitik berbasis web.',
            techStack: ['Industrial IoT Sensor', 'ESP32 / Arduino', 'WebSockets', 'Chart.js', 'Node.js', 'Responsive Dashboard'],
            role: 'IoT Engineer & Full-stack Developer (Desain arsitektur sensor, pembacaan ADC tekanan uap, transmisi WebSocket, dan dashboard telemetry real-time).',
            impact: 'Membantu operator memantau grafik siklus perebusan secara presisi, meminimalisir deviasi tekanan perebusan TBS, dan menyediakan log audit digital untuk manajemen pabrik.',
            repo: 'https://github.com/aidilham21'
        },
        koskumaps: {
            title: 'KoskuMaps',
            subtitle: 'Platform Penelusuran Indekos Mahasiswa Berbasis WebGIS Spasial',
            category: 'WebGIS • Spatial Analysis • Student Housing',
            logo: 'assets/projects/koskumaps.png',
            problem: 'Mahasiswa perantau sering kesulitan mencari hunian indekos yang sesuai dengan kriteria jarak ke kampus, fasilitas, dan anggaran, karena informasi sering tersebar tanpa peta referensi yang akurat.',
            solution: 'Merancang KoskuMaps: aplikasi penelusuran hunian berbasis Geographic Information System (GIS) dengan fitur pemetaan interaktif, perhitungan radius jarak otomatis ke kampus, filter fasilitas kamar, dan kontak langsung ke pemilik kost.',
            techStack: ['React.js', 'Leaflet.js', 'OpenStreetMap', 'Node.js', 'Express', 'GeoJSON Spatial Data'],
            role: 'Full-stack GIS Developer (Implementasi layer peta, algoritma spatial distance buffer, query filtering database, dan antarmuka UI/UX).',
            impact: 'Mempermudah ratusan mahasiswa dalam menemukan hunian strategis di sekitar area kampus dengan visualisasi peta interaktif yang transparan dan informatif.',
            repo: 'https://github.com/aidilham21'
        },
        mysap365: {
            title: 'MySAP365',
            subtitle: 'Implementasi Enterprise Resource Planning (ERP) Industri Kelapa Sawit',
            category: 'Enterprise ERP • Supply Chain • Industrial Systems',
            logo: 'assets/projects/mysap365.png',
            problem: 'Alur logistik kelapa sawit dari kebun, penimbangan TBS di timbangan jembatan (weighbridge), hingga proses pengolahan dan distribusi CPO membutuhkan konsistensi data enterprise yang tinggi agar tidak terjadi kebocoran stok atau selisih data.',
            solution: 'Mengimplementasikan dan mengonfigurasi MySAP365: sistem ERP modular yang mengintegrasikan data operasional perkebunan, inventori gudang sparepart, pengadaan barang (procurement), serta pelaporan keuangan terpadu.',
            techStack: ['ERP Framework', 'Relational Database / PostgreSQL', 'Business Process Modeling', 'Enterprise Security'],
            role: 'ERP Systems Implementer & Database Architect (Analisis modul rantai pasok, konfigurasi role pengguna, validasi integritas database, dan pengujian alur transaksi).',
            impact: 'Menciptakan alur bisnis yang transparan dari kebun hingga pabrik serta memberikan visibilitas end-to-end bagi manajemen operasional.',
            repo: 'https://github.com/aidilham21'
        },
        mystation365: {
            title: 'MyStation365',
            subtitle: 'Sistem Pemantauan Stasiun PKS Terintegrasi Real-time ke ERP MySAP365',
            category: 'PKS Automation • ERP Bridge • Industrial Integration',
            logo: 'assets/projects/mystation365.png',
            preview: 'assets/projects/mystation365_preview.jpg',
            problem: 'Sering terdapat kesenjangan (silo) data antara aktivitas operasional fisik di lantai pabrik kelapa sawit dengan sistem enterprise office ERP, sehingga pencatatan downtime atau kapasitas olah stasiun terlambat diinput.',
            solution: 'Mengembangkan MyStation365: platform stasiun operasional terpadu yang memantau alur stasiun pabrik dan secara otomatis mengirimkan rekonsiliasi data hasil olah serta log operasional langsung ke database MySAP365.',
            techStack: ['Flutter / Web', 'RESTful Middleware', 'ERP Sync Service', 'PostgreSQL', 'Real-time WebSocket'],
            role: 'Lead Integration Developer (Menghubungkan antarmuka stasiun pabrik dengan API ERP MySAP365, desain arsitektur sinkronisasi, dan UI operasional).',
            impact: 'Menghilangkan proses input ganda (double data entry) dan mempercepat pembaruan status kapasitas olah pabrik ke modul ERP secara instan.',
            repo: 'https://github.com/aidilham21'
        },
        amourtic: {
            title: 'Amourtic ERP (Openbravo)',
            subtitle: 'Implementasi Openbravo ERP pada Simulasi Perusahaan Kosmetik Amourtic',
            category: 'Openbravo ERP • Manufacturing • Supply Chain Management',
            logo: '',
            problem: 'Perusahaan manufaktur kosmetik menghadapi dinamika formulasi bahan baku (raw materials), masa kedaluwarsa, multi-warehouse storage, dan alur invoicing pesanan grosir.',
            solution: 'Merancang dan mengimplementasikan sistem ERP berbasis platform Openbravo untuk simulasi bisnis Amourtic: mengonfigurasi modul Bill of Materials (BOM), alur Purchase Order, manajemen gudang, hingga Sales & Invoicing terpadu.',
            techStack: ['Openbravo ERP', 'Java', 'PostgreSQL / Oracle DB', 'Apache Tomcat', 'Business Logic Customization'],
            role: 'ERP Specialist (Setup arsitektur Openbravo, konfigurasi master data barang, formulasi BOM manufaktur, dan simulasi alur purchase-to-pay).',
            impact: 'Membuktikan kelayakan digitalisasi manufaktur kosmetik dengan pelacakan stok otomatis dan laporan keuangan yang terrekonsiliasi secara presisi.',
            repo: 'https://github.com/aidilham21'
        },
        elib: {
            title: 'eLib Platform',
            subtitle: 'Platform Repositori Perpustakaan Digital & Kuis Training Interaktif',
            category: 'EdTech • Interactive Web Platform • Training LMS',
            logo: 'assets/projects/elib.png',
            preview: 'assets/projects/elib_preview.jpg',
            problem: 'Akses literasi digital dan pengujian kompetensi training karyawan/mahasiswa sering terkendala platform yang kaku, lambat, dan tidak terstruktur.',
            solution: 'Membangun eLib: platform perpustakaan modern dengan pembaca dokumen digital terintegrasi, repositori modul materi terklasifikasi, serta sistem evaluasi kuis training dengan grading otomatis dan papan peringkat (leaderboard).',
            techStack: ['Vue.js / React', 'Node.js', 'Express', 'PDF Rendering Engine', 'MySQL Database'],
            role: 'Full-stack Web Developer (Pengembangan fitur reader, sistem manajemen kuis interaktif, grading logic, dan antarmuka responsif).',
            impact: 'Meningkatkan keterlibatan pembelajaran mandiri dan mempermudah evaluasi pemahaman materi secara instan dan terdokumentasi.',
            repo: 'https://github.com/aidilham21'
        },
        bioenergy: {
            title: 'Bio-Energy IoT (Ekspedisi CWE)',
            subtitle: 'Penerangan Kandang Ternak dari Energi Fermentasi Limbah Padi Organik',
            category: 'Applied Community IoT • Renewable Energy • BEM CWE',
            logo: '',
            problem: 'Limbah jerami dan sekam padi pasca panen di pedesaan sering kali dibakar dan mencemari lingkungan, sementara fasilitas peternakan warga membutuhkan pencahayaan yang stabil di malam hari dengan biaya hemat energi.',
            solution: 'Bertindak sebagai Mentor Proyek TI pada program Ekspedisi Citra Widya Edukasi (BEM): membimbing perancangan inovasi bio-energy yang mengonversi gas hasil fermentasi limbah padi organik menjadi energi listrik, terintegrasi dengan modul kontrol otomatis dan sensor pencahayaan.',
            techStack: ['Bio-Digestion System', 'IoT Microcontroller', 'Light Sensor / LDR', 'Automated Relay Circuit', 'DC LED Lighting'],
            role: 'Technical Mentor & Project Advisor (Membimbing desain sirkuit sensorik, logika otomasi relay pencahayaan kandang, dan efisiensi konsumsi daya).',
            impact: 'Menghasilkan inovasi ramah lingkungan yang mengonversi limbah pertanian menjadi sumber daya energi terbarukan mandiri bagi peternak lokal.',
            repo: 'https://github.com/aidilham21'
        }
    };

    // ========================================================================
    // SYNTHESIZED WEB AUDIO SFX ENGINE (Zero External Lag / No Assets Needed)
    // ========================================================================
    let audioCtx = null;

    function initAudio() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                audioCtx = new AudioContext();
            }
        }
    }

    function playSfx(type) {
        if (!state.sfxEnabled) return;
        try {
            initAudio();
            if (!audioCtx) return;
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            const now = audioCtx.currentTime;

            if (type === 'click') {
                // Short crisp cyber tick
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                osc.frequency.exponentialRampToValueAtTime(1600, now + 0.04);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === 'switch') {
                // Futuristic screen whoosh tone
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                osc.start(now);
                osc.stop(now + 0.15);
            } else if (type === 'modal') {
                // Deep cyber modal bell
                osc.type = 'sine';
                osc.frequency.setValueAtTime(520, now);
                osc.frequency.exponentialRampToValueAtTime(1040, now + 0.08);
                osc.frequency.exponentialRampToValueAtTime(440, now + 0.25);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            }
        } catch (e) {
            // Audio context not allowed or supported
        }
    }

    // ========================================================================
    // SCREEN SWITCHING & NAVIGATION
    // ========================================================================
    function switchScreen(targetId) {
        if (!targetId || targetId === state.currentScreen) return;
        
        playSfx('switch');

        const screens = document.querySelectorAll('.screen');
        const pillNav = document.getElementById('pill-nav');
        const navPills = document.querySelectorAll('.pill-btn');

        // Hide all screens
        screens.forEach(s => s.classList.remove('active'));

        // Show target screen
        const targetScreen = document.getElementById(`screen-${targetId}`);
        if (targetScreen) {
            targetScreen.classList.add('active');
            targetScreen.scrollTop = 0;
            state.currentScreen = targetId;
        }

        // Update Nav Pills
        navPills.forEach(btn => {
            if (btn.dataset.target === targetId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Pill nav is hidden on Hero (just like reference panel 1), visible on panels 2, 3, 4
        if (pillNav) {
            if (targetId === 'hero') {
                pillNav.style.opacity = '0';
                pillNav.style.pointerEvents = 'none';
            } else {
                pillNav.style.opacity = '1';
                pillNav.style.pointerEvents = 'auto';
            }
        }

        // Camera move trigger in Three.js
        if (window.onScreenSwitch3D) {
            window.onScreenSwitch3D(targetId);
        }
    }

    // ========================================================================
    // PROJECT FILTERING ENGINE
    // ========================================================================
    function setupProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                playSfx('click');
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                state.activeFilter = filter;

                cards.forEach(card => {
                    const categories = card.dataset.category || '';
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px) scale(0.95)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 250);
                    }
                });
            });
        });
    }

    // ========================================================================
    // CASE STUDY MODAL MANAGEMENT
    // ========================================================================
    function setupModal() {
        const modal = document.getElementById('project-modal');
        const modalContainer = document.getElementById('modal-dynamic-content');
        const closeBtn = document.getElementById('modal-close');
        const cards = document.querySelectorAll('.bento-card');

        function openProjectModal(projectId) {
            const data = projectDetails[projectId];
            if (!data) return;

            playSfx('modal');

            const logoHtml = data.logo 
                ? `<img src="${data.logo}" alt="${data.title} Logo" class="modal-logo">`
                : `<div class="modal-logo" style="display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--cyan-primary);">${data.title.substring(0, 3)}</div>`;

            const previewHtml = data.preview
                ? `<div class="modal-preview-wrap"><img src="${data.preview}" alt="${data.title} Interface Preview" class="modal-preview-img"></div>`
                : '';

            const techPillsHtml = data.techStack.map(t => `<span class="modal-tech-pill">${t}</span>`).join('');

            modalContainer.innerHTML = `
                ${previewHtml}
                <div class="modal-header-section">
                    ${logoHtml}
                    <div class="modal-title-wrap">
                        <h2>${data.title}</h2>
                        <p>${data.subtitle}</p>
                    </div>
                </div>

                <div class="modal-grid-details">
                    <div class="detail-block">
                        <h4>Kategori & Lingkup</h4>
                        <p>${data.category}</p>
                    </div>
                    <div class="detail-block">
                        <h4>Peran & Kepemimpinan</h4>
                        <p>${data.role}</p>
                    </div>
                </div>

                <div class="modal-full-block">
                    <h4>Latar Belakang & Problem Industri</h4>
                    <p>${data.problem}</p>
                </div>

                <div class="modal-full-block">
                    <h4>Solusi Rekayasa & Implementasi</h4>
                    <p>${data.solution}</p>
                </div>

                <div class="modal-full-block">
                    <h4>Hasil Nyata & Dampak Operasional</h4>
                    <p>${data.impact}</p>
                </div>

                <div class="modal-full-block">
                    <h4>Teknologi & Sensor Terapan</h4>
                    <div class="modal-tech-stack-row">
                        ${techPillsHtml}
                    </div>
                </div>

                <div class="modal-actions">
                    <a href="${data.repo}" target="_blank" rel="noopener" class="modal-btn primary">
                        Kunjungi Repository GitHub ↗
                    </a>
                    <button class="modal-btn secondary" id="modal-inner-close">Tutup</button>
                </div>
            `;

            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');

            const innerClose = document.getElementById('modal-inner-close');
            if (innerClose) {
                innerClose.addEventListener('click', closeModal);
            }
        }

        function closeModal() {
            playSfx('click');
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
        }

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const pId = card.dataset.projectId;
                if (pId) openProjectModal(pId);
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) {
                closeModal();
            }
        });
    }

    // ========================================================================
    // 3D TILT EFFECT ON CARDS
    // ========================================================================
    function setup3DTilt() {
        const tiltCards = document.querySelectorAll('.tilt-card');

        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
            });
        });
    }

    // ========================================================================
    // THREE.JS 3D BACKGROUND SCENE: FLOWING SILK WAVE (MINIMALIST & ELEGANT)
    // ========================================================================
    function initThreeJS() {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas || typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 75);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Lighting: Soft dark ambient + Glowing Cyan & Deep Crimson Sheen
        const ambientLight = new THREE.AmbientLight(0x0a1424, 1.4);
        scene.add(ambientLight);

        const cyanLight = new THREE.PointLight(0x00f2fe, 3.8, 260);
        cyanLight.position.set(50, 45, 35);
        scene.add(cyanLight);

        const crimsonLight = new THREE.PointLight(0x870d1e, 3.2, 260);
        crimsonLight.position.set(-50, -35, 25);
        scene.add(crimsonLight);

        const topHighlight = new THREE.DirectionalLight(0xdbeafe, 0.7);
        topHighlight.position.set(0, 60, 40);
        scene.add(topHighlight);

        // High-density Parametric Plane for Silk Wave
        const planeGeo = new THREE.PlaneGeometry(160, 100, 80, 50);

        // Glossy Silk Material with clearcoat reflections
        const silkMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x070f1e,
            emissive: 0x02060e,
            roughness: 0.32,
            metalness: 0.72,
            clearcoat: 0.65,
            clearcoatRoughness: 0.25,
            side: THREE.DoubleSide,
            flatShading: false
        });

        const silkMesh = new THREE.Mesh(planeGeo, silkMaterial);
        silkMesh.rotation.x = -Math.PI / 3.2;
        silkMesh.rotation.z = Math.PI / 7;
        silkMesh.position.set(4, -6, -18);
        scene.add(silkMesh);

        // Parallax Interaction State
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const clock = new THREE.Clock();

        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) * 0.04;
            mouseY = (e.clientY - window.innerHeight / 2) * 0.04;
        });

        // Dynamic Position Adjust on Screen Switch
        window.onScreenSwitch3D = function(screenId) {
            if (screenId === 'hero') {
                targetX = 0;
                targetY = 0;
            } else if (screenId === 'profil') {
                targetX = 14;
                targetY = -8;
            } else if (screenId === 'project') {
                targetX = -14;
                targetY = 8;
            } else if (screenId === 'contact') {
                targetX = 8;
                targetY = -12;
            }
        };

        // Render Animation Loop: Continuous Liquid Silk Undulation
        function animate() {
            requestAnimationFrame(animate);

            const time = clock.getElapsedTime() * 0.55;
            const pos = planeGeo.attributes.position;
            const uvs = planeGeo.attributes.uv;

            // Multi-harmonic gentle silk wave equation
            for (let i = 0; i < pos.count; i++) {
                const u = uvs.getX(i);
                const v = uvs.getY(i);

                const w1 = Math.sin(u * 4.8 + time * 0.85) * Math.cos(v * 3.0 + time * 0.55) * 6.0;
                const w2 = Math.sin((u + v) * 3.8 - time * 0.75) * 3.6;
                const w3 = Math.cos(u * 2.2 - v * 2.8 + time * 0.35) * 2.2;

                pos.setZ(i, w1 + w2 + w3);
            }
            pos.needsUpdate = true;
            planeGeo.computeVertexNormals();

            // Parallax camera easing
            camera.position.x += (mouseX + targetX - camera.position.x) * 0.035;
            camera.position.y += (-mouseY + targetY - camera.position.y) * 0.035;
            camera.lookAt(0, 0, 0);

            // Subtle gentle breathing movement
            silkMesh.rotation.y = Math.sin(time * 0.25) * 0.03;

            renderer.render(scene, camera);
        }

        animate();

        // Resize Listener
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // ========================================================================
    // KEYBOARD NAVIGATION & BUTTON BINDINGS
    // ========================================================================
    function setupInteractions() {
        // Nav Pills
        const navPills = document.querySelectorAll('.pill-btn');
        navPills.forEach(btn => {
            btn.addEventListener('click', () => {
                switchScreen(btn.dataset.target);
            });
        });

        // Brand Home Logo Click
        const homeBtn = document.getElementById('brand-home');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                switchScreen('hero');
            });
        }

        // Hero Clean Menu Links
        const menuLinks = document.querySelectorAll('.menu-link');
        menuLinks.forEach(item => {
            item.addEventListener('click', () => {
                const target = item.dataset.target;
                if (target) switchScreen(target);
            });
        });

        // Audio Toggle
        const sfxToggle = document.getElementById('sfx-toggle');
        if (sfxToggle) {
            sfxToggle.addEventListener('click', () => {
                state.sfxEnabled = !state.sfxEnabled;
                playSfx('click');
                const sfxWrap = document.getElementById('sfx-icon-wrap');
                if (sfxWrap) {
                    if (state.sfxEnabled) {
                        sfxWrap.innerHTML = `<svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
                    } else {
                        sfxWrap.innerHTML = `<svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
                    }
                }
            });
        }

        // Keyboard navigation (Arrow keys and 1, 2, 3, 4)
        window.addEventListener('keydown', (e) => {
            const modal = document.getElementById('project-modal');
            if (modal && modal.classList.contains('open')) return;

            const currentIndex = state.screens.indexOf(state.currentScreen);

            if (e.key === 'ArrowRight' || e.key === 'PageDown') {
                const nextIndex = (currentIndex + 1) % state.screens.length;
                switchScreen(state.screens[nextIndex]);
            } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                const prevIndex = (currentIndex - 1 + state.screens.length) % state.screens.length;
                switchScreen(state.screens[prevIndex]);
            } else if (e.key === '1') {
                switchScreen('hero');
            } else if (e.key === '2') {
                switchScreen('profil');
            } else if (e.key === '3') {
                switchScreen('project');
            } else if (e.key === '4') {
                switchScreen('contact');
            }
        });
    }

    // ========================================================================
    // DOM READY INITIALIZATION
    // ========================================================================
    document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.remove('loading-state');
        setupInteractions();
        setupProjectFilters();
        setupModal();
        setup3DTilt();
        initThreeJS();
    });

})();
