/* ═══════════════════════════════════════════════════════════════════ */
/* ENTRUSTED — MITIGATION JOB DASHBOARD — app.js                     */
/* ═══════════════════════════════════════════════════════════════════ */

const app = {
    mockData: {
        job: { id: "MIT-2026-04182", claim: "CLM-99881A", name: "Smith Residence", address: "1247 Oakwater Dr, Tampa, FL 33611", mitLead: "John Velez" },
        extenuating: "Homeowner is elderly (78 yrs) and resides in the home during mitigation. Strong containment barriers with clean zippers were erected to fully isolate living areas from the kitchen demolition zone. Additional travel time required — property is 45 min from shop. After-hours emergency call-out on Day 1 due to active leak discovered at 5:30 PM.",
        narrativeLogs: [
            { id: "log-1", date: "April 18", room: "Kitchen", tech: "John Velez", notes: "Extracted standing water from flooring bounds. Plumber on-site confirmed ruptured supply line under sink — repaired. Commenced emergency tear-out of lower cabinetry and laminate flooring. Set containment, negative air pressure, and placed drying equipment." },
            { id: "log-2", date: "April 18", room: "Living Room", tech: "John Velez", notes: "Extracted standing water from hardwood bounds. Water had migrated under baseboards to sill plate. Set up primary containment and negative air pressure with HEPA filtration." },
            { id: "log-3", date: "April 18", room: "Master Bath", tech: "Mike Torres", notes: "Discovered secondary moisture migration behind tile wall. Installed Injectidry system to dry wall cavity without additional demolition." },
            { id: "log-4", date: "April 19", room: "Kitchen", tech: "John Velez", notes: "Monitored equipment and moisture levels — readings dropping per target trajectory. Removed baseboards to expose sill plate for enhanced drying." },
            { id: "log-5", date: "April 20", room: "Living Room", tech: "Mike Torres", notes: "Engineered hardwood scraped and bagged. Subfloor prepped for aggressive targeted drying via mat system. Moisture readings trending down." },
            { id: "log-6", date: "April 21", room: "Kitchen", tech: "John Velez", notes: "All materials approaching dry standard. Sill plate reading 14% (target ≤12%). Continued drying one additional day per IICRC S500 protocol." },
            { id: "log-7", date: "April 22", room: "All Rooms", tech: "John Velez", notes: "Final moisture readings confirmed at or below dry standard. All equipment pulled. COS signed by homeowner. Job complete." }
        ],
        docs: [
            { id: "doc-1", name: "Plumbing Report", type: "PDF", date: "04/18/2026" },
            { id: "doc-2", name: "Certificate of Satisfaction (COS)", type: "PDF", date: "04/22/2026" },
            { id: "doc-3", name: "Direction to Pay (Signed)", type: "PDF", date: "04/18/2026" },
            { id: "doc-4", name: "W-9", type: "PDF", date: "04/18/2026" }
        ],
        photos: [
            { id: "photo-1", room: "Kitchen", phase: "Install", caption: "Kitchen - April 18", url: "https://picsum.photos/seed/sol1/400/300", date: "April 18" },
            { id: "photo-2", room: "Kitchen", phase: "Install", caption: "Kitchen - April 18", url: "https://picsum.photos/seed/cabinetdemo/400/300", date: "April 18" },
            { id: "photo-3", room: "Kitchen", phase: "Check-in/Monitoring", caption: "Kitchen - April 19", url: "https://picsum.photos/seed/wallcavity/400/300", date: "April 19" },
            { id: "photo-4", room: "Living Room", phase: "Install", caption: "Living Room - April 18", url: "https://picsum.photos/seed/hardwood1/400/300", date: "April 18" },
            { id: "photo-5", room: "Living Room", phase: "Check-in/Monitoring", caption: "Living Room - April 20", url: "https://picsum.photos/seed/subfloor1/400/300", date: "April 20" },
            { id: "photo-6", room: "Master Bath", phase: "Install", caption: "Master Bath - April 18", url: "https://picsum.photos/seed/bathwall/400/300", date: "April 18" },
            { id: "photo-7", room: "Master Bath", phase: "Check-in/Monitoring", caption: "Master Bath - April 19", url: "https://picsum.photos/seed/injectidry/400/300", date: "April 19" },
            { id: "photo-8", room: "Kitchen", phase: "Pull", caption: "Kitchen - April 22", url: "https://picsum.photos/seed/kitchenpull/400/300", date: "April 22" }
        ],
        chambers: [
            { id: "Chamber 1", rooms: ["Kitchen", "Living Room", "Dining Room"] },
            { id: "Chamber 2", rooms: ["Master Bath"] }
        ],
        equipment: [
            { chamber: "Chamber 1", type: "LGR 7000Xi Dehumidifier", install: "04/18/2026", pull: "04/22/2026", days: 4, isDehu: true, ahamPPD: 130, notes: "Primary drying unit — center-chamber." },
            { chamber: "Chamber 1", type: "Velo Pro Air Mover",       install: "04/18/2026", pull: "04/22/2026", days: 4, isDehu: false, notes: "Directed at wall cavity behind cabinetry." },
            { chamber: "Chamber 1", type: "Velo Pro Air Mover",       install: "04/18/2026", pull: "04/22/2026", days: 4, isDehu: false, notes: "Pushing air across exposed subfloor." },
            { chamber: "Chamber 1", type: "HEPA Air Scrubber",        install: "04/18/2026", pull: "04/22/2026", days: 4, isDehu: false, notes: "Negative air / containment pressure." },
            { chamber: "Chamber 2", type: "LGR 6000 Dehumidifier",    install: "04/19/2026", pull: "04/22/2026", days: 3, isDehu: true, ahamPPD: 100, notes: "Secondary chamber unit." },
            { chamber: "Chamber 2", type: "Injectidry HP System",     install: "04/19/2026", pull: "04/22/2026", days: 3, isDehu: false, notes: "Wall cavity drying — behind tile." }
        ],
        atmosphericLogs: [
            { date: "04/18", out: "82°F / 65%", un: "74°F / 52%", ch: "72°F / 78%", de: "92°F / 22%", notes: "Initial setup phase. Extremely high humidity in chamber near source." },
            { date: "04/19", out: "79°F / 60%", un: "73°F / 50%", ch: "76°F / 55%", de: "90°F / 16%", notes: "Drying progressing normally. Equipment repositioned for subfloor." },
            { date: "04/20", out: "80°F / 58%", un: "73°F / 48%", ch: "78°F / 40%", de: "92°F / 12%", notes: "Chamber stabilized. Hardwood removal complete." },
            { date: "04/21", out: "77°F / 55%", un: "72°F / 46%", ch: "80°F / 32%", de: "94°F / 10%", notes: "Near dry standard on most materials." },
            { date: "04/22", out: "78°F / 52%", un: "72°F / 45%", ch: "76°F / 28%", de: "88°F / 9%", notes: "All readings at/below standard. Equipment pulled." }
        ],
        roomLogs: [
            { room: "Kitchen", length: 14, width: 9, height: 10, vol: 1260,
                moisture: [
                    { mat: "Drywall (Base)", std: "10%", d1: "95%", d2: "45%", d3: "12%" },
                    { mat: "Sill Plate (Wood)", std: "12%", d1: "45%", d2: "28%", d3: "14%" }
                ]
            },
            { room: "Living Room", length: 18, width: 12, height: 10, vol: 2160,
                moisture: [
                    { mat: "Hardwood Subfloor (OSB)", std: "10%", d1: "99%", d2: "60%", d3: "10%" }
                ]
            }
        ],
        demolition: [
            { room: "Kitchen", dateRemoved: "04/18/2026", item: "Laminate Flooring", qty: "140 SQFT", afterHrs: true, notes: "Emergency removal — flooring saturated and delaminating. - Tech: John Velez", photoUrl: "https://picsum.photos/seed/demof/400/300" },
            { room: "Kitchen", dateRemoved: "04/18/2026", item: "Lower Cabinetry (Base)", qty: "13 LF", afterHrs: true, notes: "Base cabinets detached to access plumbing chase. - Tech: John Velez", photoUrl: "https://picsum.photos/seed/democab/400/300" },
            { room: "Living Room", dateRemoved: "04/19/2026", item: "Baseboards", qty: "40 LF", afterHrs: false, notes: "Removed along perimeter for wall cavity inspection. - Tech: Mike Torres", photoUrl: "https://picsum.photos/seed/demolrbb/400/300" },
            { room: "Living Room", dateRemoved: "04/20/2026", item: "Engineered Hardwood", qty: "320 SQFT", afterHrs: false, notes: "Glued-down hardwood required heavy scraping. Two-tech operation. - Tech: John Velez", photoUrl: "https://picsum.photos/seed/demohw/400/300" }
        ],
        timeLogs: [
            { date: "04/18/2026", tech: "John Velez, Mike Torres", arrive: "5:30 PM", end: "11:45 PM", afterHrs: true, travel: 45, demo: 240, justification: "Required 2 techs for heavy content manipulation and extensive upper cabinet tear-out safely." },
            { date: "04/19/2026", tech: "John Velez",              arrive: "9:00 AM", end: "10:30 AM", afterHrs: false, travel: 45, demo: 0,  justification: "—" },
            { date: "04/20/2026", tech: "John Velez, Mike Torres", arrive: "9:00 AM", end: "1:30 PM",  afterHrs: false, travel: 45, demo: 180, justification: "Required 2 techs for glued-down hardwood scraping — heavy labor." },
            { date: "04/21/2026", tech: "John Velez",              arrive: "2:00 PM", end: "3:15 PM",  afterHrs: false, travel: 45, demo: 0,  justification: "—" },
            { date: "04/22/2026", tech: "John Velez",              arrive: "10:00 AM", end: "11:30 AM", afterHrs: false, travel: 45, demo: 0, justification: "—" }
        ],
        billablesPPE: [
            { item: "N-95 Respirators", qty: "6 units" },
            { item: "Tyvek Suits", qty: "4 suits" },
            { item: "Nitrile Gloves (Heavy Duty)", qty: "2 boxes" },
            { item: "Heavy Duty Trash Bags", qty: "40 ct" },
            { item: "Poly Sheeting (6 mil)", qty: "200 SQFT" }
        ]
    },

    init() {
        this.renderGlobalHeader();
        this.renderTabDocs();
        this.renderTabEquipAtmos();
        this.renderTabDemoMoisture();
        this.renderTabOps();
        this.setupPhotoFilters();
    },

    switchView(viewId) {
        document.querySelectorAll('.view-section').forEach(v => {
            v.classList.add('hidden');
            v.classList.remove('active');
        });
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('active');
        }
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('bg-white/10', 'text-white', 'active');
            btn.classList.add('text-gray-500');
            if (btn.dataset.target === viewId) {
                btn.classList.add('bg-white/10', 'text-white', 'active');
                btn.classList.remove('text-gray-500');
            }
        });
    },

    renderGlobalHeader() {
        const j = this.mockData.job;
        document.getElementById('sidebar-job-name').textContent = j.name;
        document.getElementById('sidebar-job-id').textContent = j.id;
        document.getElementById('header-name').textContent = j.name;
        document.getElementById('header-job-num').textContent = j.id;
        document.getElementById('header-claim').textContent = j.claim;
        document.getElementById('header-address').textContent = j.address;
        document.getElementById('header-lead').textContent = j.mitLead;
    },

    toggleSectionCheckboxes(sectionId, isChecked) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.querySelectorAll('.pdf-item-checkbox').forEach(cb => { cb.checked = isChecked; });
        }
    },

    /* ── TAB 1: DOCS & PHOTOS ───────────────────────────────────── */
    renderTabDocs() {
        const d = this.mockData;
        document.getElementById('extenuating-text').textContent = d.extenuating;

        // Group narrative by Date -> Room 
        const dates = [...new Set(d.narrativeLogs.map(x => x.date))];
        let html = '';
        dates.forEach(dateStr => {
            const dayNum = dates.indexOf(dateStr) + 1;
            html += `<div class="mb-5 last:mb-0">
                <h3 class="font-black text-slate-800 text-sm uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 text-primary">
                    <i class="fa-regular fa-calendar mr-1.5"></i> ${dateStr} (Day ${dayNum})
                </h3>
                <div class="space-y-3 pl-3 border-l-2 border-slate-100 ml-1">`;
            d.narrativeLogs.filter(x => x.date === dateStr).forEach(log => {
                html += `<div class="bg-white rounded-lg p-3 text-sm text-slate-700 leading-relaxed border border-slate-200 shadow-sm flex items-start gap-3 transition-colors hover:border-primary/40">
                    <label class="mt-0.5 cursor-pointer">
                        <input type="checkbox" class="pdf-item-checkbox pdf-checkbox custom-checkbox" data-selection-id="${log.id}" style="accent-color:#f97316; width:16px; height:16px;">
                    </label>
                    <span class="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded shadow-sm border border-slate-200 text-[11px] shrink-0 uppercase tracking-widest">${log.room}</span>
                    <div class="flex-1">
                        <span>${log.notes}</span>
                        <span class="mx-1.5 text-slate-300">—</span>
                        <span class="text-[10px] font-bold text-primary uppercase tracking-wider">Tech: ${log.tech}</span>
                    </div>
                </div>`;
            });
            html += `</div></div>`;
        });
        document.getElementById('narrative-content').innerHTML = html;

        // Documents Grid
        document.getElementById('docs-grid').innerHTML = d.docs.map(doc => `
            <div class="border border-slate-200 rounded-lg p-3.5 bg-white shadow-sm flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer group relative pl-10">
                <label class="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer z-10">
                    <input type="checkbox" class="pdf-item-checkbox pdf-checkbox" data-selection-id="${doc.id}" style="accent-color:#f97316; width:16px; height:16px;">
                </label>
                <div class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center text-lg"><i class="fa-solid fa-file-pdf"></i></div>
                    <div>
                        <p class="font-bold text-slate-800 text-xs">${doc.name}</p>
                        <p class="text-[9px] text-slate-400 font-mono uppercase tracking-widest">${doc.date}</p>
                    </div>
                </div>
                <button class="text-slate-300 group-hover:text-primary transition-colors"><i class="fa-solid fa-eye"></i></button>
            </div>
        `).join('');

        this.renderPhotos();
    },

    setupPhotoFilters() {
        const photos = this.mockData.photos;
        const rooms = [...new Set(photos.map(p => p.room))];
        const dates = [...new Set(photos.map(p => p.date))];
        const roomSel = document.getElementById('photo-room-filter');
        rooms.forEach(r => { roomSel.innerHTML += `<option value="${r}">${r}</option>`; });
        const dateSel = document.getElementById('photo-date-filter');
        dates.forEach(d => { dateSel.innerHTML += `<option value="${d}">${d}</option>`; });
        document.getElementById('photo-search').addEventListener('input', () => this.renderPhotos());
        document.getElementById('photo-room-filter').addEventListener('change', () => this.renderPhotos());
        document.getElementById('photo-date-filter').addEventListener('change', () => this.renderPhotos());
        document.getElementById('photo-phase-filter').addEventListener('change', () => this.renderPhotos());
    },

    renderPhotos() {
        const search = (document.getElementById('photo-search')?.value || '').toLowerCase();
        const roomF = document.getElementById('photo-room-filter')?.value || 'All';
        const dateF = document.getElementById('photo-date-filter')?.value || 'All';
        const phaseF = document.getElementById('photo-phase-filter')?.value || 'All';
        let filtered = this.mockData.photos;
        if (roomF !== 'All') filtered = filtered.filter(p => p.room === roomF);
        if (dateF !== 'All') filtered = filtered.filter(p => p.date === dateF);
        if (phaseF !== 'All') filtered = filtered.filter(p => p.phase === phaseF);
        if (search) filtered = filtered.filter(p => p.caption.toLowerCase().includes(search) || p.room.toLowerCase().includes(search));

        const grid = document.getElementById('photos-grid');
        if (!grid) return;
        grid.innerHTML = filtered.map(p => `
            <div class="photo-card border border-slate-200 bg-white rounded-lg overflow-hidden relative shadow-sm hover:shadow-md transition-shadow">
                <div class="absolute top-2 left-2 z-10">
                    <label class="flex items-center gap-1.5 bg-black/70 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded backdrop-blur-sm cursor-pointer hover:bg-black">
                        <input type="checkbox" class="pdf-item-checkbox pdf-checkbox custom-checkbox" data-selection-id="${p.id}" style="accent-color:#f97316;width:14px;height:14px;"> Select
                    </label>
                </div>
                <div class="absolute top-2 right-2 z-10">
                    <div class="bg-black/70 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded backdrop-blur-sm">${p.phase}</div>
                </div>
                <img src="${p.url}" alt="${p.caption}" loading="lazy" class="w-full h-40 object-cover"/>
                <div class="p-3 text-center border-t border-slate-100">
                    <p class="text-[12px] font-black tracking-wide text-slate-800 uppercase">${p.room}</p>
                    <p class="text-[10px] text-slate-500 font-mono">${p.date}</p>
                </div>
            </div>
        `).join('') || `<p class="col-span-full text-center text-slate-400 font-medium py-10">No photos matched your search criteria.</p>`;
    },

    /* ── TAB 2: EQUIPMENT & ATMOSPHERICS ─────────────────────────── */
    renderTabEquipAtmos() {
        const d = this.mockData;
        let html = '';
        d.chambers.forEach(c => {
            const chamberEquip = d.equipment.filter(e => e.chamber === c.id);
            const actualDehus = chamberEquip.filter(e => e.isDehu).reduce((acc, e) => acc + (e.ahamPPD || 0), 0);
            const iicrcPass = actualDehus > 0; // Simplified pass logic for Demo

            html += `
            <div class="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white mb-6 last:mb-0">
                <div class="bg-slate-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200">
                    <div>
                        <h3 class="font-black text-slate-900 text-lg tracking-tight uppercase">${c.id}</h3>
                        <p class="text-[11px] text-slate-500 font-medium mt-0.5">${c.rooms.join(' · ')}</p>
                    </div>
                </div>
                
                <div class="bg-white border-b border-slate-100 px-5 py-3 flex items-center">
                    <span class="${iicrcPass ? 'bg-green-100 text-green-800 border-green-300' : 'bg-red-100 text-red-800 border-red-300'} text-xs px-3 py-1 font-bold rounded shadow-sm border uppercase tracking-wider">
                        ${iicrcPass ? '✅ AHAM Met' : '⚠️ AHAM Not Met'}
                    </span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm text-slate-600">
                        <thead class="bg-slate-50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                            <tr>
                                <th class="px-5 py-3 border-y border-slate-200">Equipment</th>
                                <th class="px-5 py-3 text-center border border-slate-200">Install Date</th>
                                <th class="px-5 py-3 text-center border-y border-slate-200">Pull Date</th>
                                <th class="px-5 py-3 text-center bg-blue-50/50 text-blue-800 border border-slate-200">Total Days</th>
                                <th class="px-5 py-3 border-y border-slate-200 w-1/3">Equipment Notes</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            ${chamberEquip.map(e => `
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="px-5 py-3 font-bold text-slate-900 text-[12px] tracking-tight uppercase">${e.type}</td>
                                <td class="px-5 py-3 text-center font-mono text-slate-600 border-l border-slate-200">${e.install}</td>
                                <td class="px-5 py-3 text-center font-mono text-slate-600">${e.pull}</td>
                                <td class="px-5 py-3 text-center font-black text-lg text-blue-800 bg-blue-50/20">${e.days}</td>
                                <td class="px-5 py-3 text-xs text-slate-600 border-l border-slate-200 italic">${e.notes}</td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        });
        document.getElementById('equipment-content').innerHTML = html;

        // Atmospherics
        document.getElementById('atmospheric-tbody').innerHTML = d.atmosphericLogs.map(a => `
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-5 py-3 font-bold text-slate-800 font-mono whitespace-nowrap">${a.date}</td>
                <td class="px-5 py-3 text-center text-slate-600">${a.out}</td>
                <td class="px-5 py-3 text-center text-slate-600">${a.un}</td>
                <td class="px-5 py-3 text-center font-bold text-slate-900">${a.ch}</td>
                <td class="px-5 py-3 text-center font-black text-blue-700 bg-blue-50/30">${a.de}</td>
                <td class="px-5 py-3 text-xs italic text-slate-500 leading-snug border-l border-slate-200">${a.notes}</td>
            </tr>
        `).join('');
    },

    /* ── TAB 3: DEMO & MOISTURE ──────────────────────────────────── */
    renderTabDemoMoisture() {
        const d = this.mockData;
        
        let moistureHTML = '';
        d.roomLogs.forEach(block => {
            moistureHTML += `
            <div class="border border-slate-200 rounded-lg overflow-hidden shadow-sm bg-white mb-6 last:mb-0">
                <div class="bg-slate-100 px-5 py-3 border-b border-slate-300">
                    <h5 class="font-black text-slate-800 uppercase tracking-widest text-sm flex items-center gap-2">
                        <i class="fa-solid fa-cube text-slate-400"></i> ${block.room}
                    </h5>
                    <p class="text-[11px] text-slate-500 font-mono mt-1 font-bold">L: ${block.length}' × W: ${block.width}' × H: ${block.height}' <span class="mx-2 text-slate-300">|</span> <span class="font-black text-blue-800 bg-blue-100 px-2 py-0.5 rounded shadow-sm border border-blue-200 uppercase">Volume: ${block.vol.toLocaleString()} CF</span></p>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-slate-600">
                        <thead class="bg-slate-50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                            <tr>
                                <th class="px-5 py-3">Material</th>
                                <th class="px-5 py-3 text-center border-x border-slate-200">Dry Std %</th>
                                <th class="px-5 py-3 text-center bg-blue-50/50">Day 1 (Apr 18)</th>
                                <th class="px-5 py-3 text-center bg-blue-50/50">Day 2 (Apr 19)</th>
                                <th class="px-5 py-3 text-center bg-blue-50/50">Day 3 (Apr 20)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            ${block.moisture.map(m => `
                            <tr class="hover:bg-slate-50">
                                <td class="px-5 py-3 font-bold text-slate-800">${m.mat}</td>
                                <td class="px-5 py-3 text-center font-bold text-slate-500 border-x border-slate-200">${m.std}</td>
                                <td class="px-5 py-3 text-center font-black text-blue-800 bg-blue-50/20">${m.d1}</td>
                                <td class="px-5 py-3 text-center font-black text-blue-800 bg-blue-50/20">${m.d2}</td>
                                <td class="px-5 py-3 text-center font-black text-blue-800 bg-blue-50/20">${m.d3}</td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        });
        document.getElementById('moisture-content').innerHTML = moistureHTML;

        // Demolition grouped by room
        const demoRooms = [...new Set(d.demolition.map(x => x.room))];
        let demoHTML = '';
        demoRooms.forEach(room => {
            demoHTML += `<tr><td colspan="6" class="bg-slate-800 text-white font-black uppercase text-xs tracking-widest px-5 py-2"><i class="fa-solid fa-hammer mr-2 text-primary"></i>Demo: ${room}</td></tr>`;
            d.demolition.filter(x => x.room === room).forEach(item => {
                demoHTML += `
                <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                    <td class="px-5 py-4 font-bold text-slate-700 font-mono">${item.dateRemoved}</td>
                    <td class="px-5 py-4 text-slate-900 font-bold">${item.item}</td>
                    <td class="px-5 py-4 text-center font-black text-blue-800 text-sm bg-blue-50/20">${item.qty}</td>
                    <td class="px-5 py-4 text-center">
                        ${item.afterHrs ? '<span class="bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider shadow-sm"><i class="fa-solid fa-moon"></i> Yes</span>' : '<span class="text-slate-300">—</span>'}
                    </td>
                    <td class="px-5 py-4 text-sm text-slate-600 leading-snug">${item.notes}</td>
                    <td class="px-5 py-4 text-center border-l border-slate-200">
                        <a href="${item.photoUrl}" target="_blank" class="text-primary hover:text-primaryDark hover:underline font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                            <i class="fa-regular fa-image"></i> Link
                        </a>
                    </td>
                </tr>`;
            });
        });
        document.getElementById('demolition-tbody').innerHTML = demoHTML;
    },

    /* ── TAB 4: OPERATIONS & TIME LOGS ───────────────────────────── */
    renderTabOps() {
        const d = this.mockData;
        const uniqueDays = new Set(d.timeLogs.map(t => t.date)).size;
        const checkDays = d.timeLogs.filter(t => t.demo === 0).length;
        document.getElementById('metric-days').textContent = uniqueDays;
        document.getElementById('metric-checks').textContent = checkDays;
        
        document.getElementById('time-logs-tbody').innerHTML = d.timeLogs.map(t => `
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-5 py-4 font-bold text-slate-900 align-top whitespace-nowrap">
                    ${t.date}
                    ${t.afterHrs ? '<br/><span class="bg-amber-100 text-amber-800 border-amber-300 font-black uppercase text-[9px] px-1.5 py-0.5 mt-1 block w-max rounded tracking-wider shadow-sm"><i class="fa-solid fa-moon"></i> After Hrs</span>' : ''}
                </td>
                <td class="px-5 py-4 text-slate-800 border-x border-slate-200 font-bold align-top text-xs">${t.tech}</td>
                <td class="px-5 py-4 text-center font-bold text-slate-700 align-top">${t.arrive}</td>
                <td class="px-5 py-4 text-center font-bold text-slate-700 align-top">${t.end}</td>
                <td class="px-5 py-4 text-center font-mono font-bold text-blue-800 bg-blue-50/30 align-top">${t.travel}</td>
                <td class="px-5 py-4 text-center font-mono font-black text-blue-800 bg-blue-50/50 align-top text-base">${t.demo}</td>
                <td class="px-5 py-4 text-xs text-slate-600 border-l border-slate-200 align-top italic">${t.justification}</td>
            </tr>
        `).join('');

        document.getElementById('billables-content').innerHTML = `
            <div class="overflow-x-auto rounded-lg border border-slate-200 shadow-sm bg-white">
                <table class="w-full text-left text-sm text-slate-600">
                    <thead class="bg-slate-50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        <tr>
                            <th class="px-5 py-3">Item</th>
                            <th class="px-5 py-3 text-center border-l border-slate-200">Quantity</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${d.billablesPPE.map(b => `
                        <tr class="hover:bg-slate-50 transition-colors">
                            <td class="px-5 py-3 font-bold text-slate-800">${b.item}</td>
                            <td class="px-5 py-3 text-center font-black text-slate-700 border-l border-slate-200 bg-slate-50/50">${b.qty}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>`;
    },

    /* ── PDF GENERATION MOCKS ────────────────────────────────────── */
    generatePDF(reportType) {
        console.log(`Generating preset PDF: ${reportType}`);
        alert(`CRITICAL STABILITY INSTRUCTION ACTUATED:\\nPreset PDF Generation for '${reportType}' is stubbed for stability.\\nFull layout engine successfully preserved.`);
    },

    generateCustomPDF() {
        const checked = document.querySelectorAll('.pdf-checkbox:checked');
        if (checked.length === 0) {
            alert('Please select at least one item, note, or section to build a custom report.');
            return;
        }
        let items = [];
        checked.forEach(cb => {
            if (cb.dataset.card) items.push(cb.dataset.card);
            if (cb.dataset.selectionId) items.push(cb.dataset.selectionId);
        });
        console.log("Custom PDF Items Selected:", items);
        alert(`CRITICAL STABILITY INSTRUCTION ACTUATED:\\nCustom PDF Generation is stubbed.\\nSelected IDs:\\n${items.join(', ')}`);
    }
};

document.addEventListener('DOMContentLoaded', () => { app.init(); });
