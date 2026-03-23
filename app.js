const defaultMockData = {
    job: {
        name: "Smith Residence - Cat 3 Water Loss",
        address: "1234 Maple Drive, Dallas, TX 75201",
        id: "MIT-2026-9041",
        claim: "SF-098-441-A",
        dateOfLoss: "3/18/2026",
        totalDryingDays: 4
    },
    timeline: [
        { phase: "Phase 1: Install & Stabilization", dates: "3/18 - 3/19", description: "Arrived on site. Extracted 200 gallons of standing water from Kitchen and Living Room. Emergency demo of saturated drywall (2ft flood cuts) and engineered hardwood. Set initial drying equipment (2 LGRs, 10 Air Movers)." },
        { phase: "Phase 2: Drying & Monitoring", dates: "3/20 - 3/21", description: "Conducted daily moisture readings. Relocated 4 Air Movers to focus on stubborn wet spots in the Living Room subfloor. Temperature maintained at 85°F to accelerate evaporation." },
        { phase: "Phase 3: Equipment Pull & Wrap-Up", dates: "3/22", description: "All materials reached dry standard. Removed all equipment, performed final cleanup, sprayed antimicrobial on exposed studs, and uploaded final photo documentation." }
    ],
    story: `Upon arrival at the Smith Residence, the source of the loss was determined to be a ruptured supply line under the kitchen sink, which flooded the Kitchen, adjacent Dining Room, and Living Room. Water had been standing for approximately 12 hours before our arrival, classifying this as a Category 3 (grossly unsanitary) loss due to time and potential bacterial growth.\n\nWe immediately began extraction and emergency structural demolition to prevent secondary damage (mold amplification). Engineered hardwood in the Living Room was fully saturated and delaminating, requiring immediate removal. Baseboards and 2-foot flood cuts were made across all affected walls to expose the saturated sill plates and insulation. An aggressive drying setup of 2 LGR Dehumidifiers and 14 Air Movers was deployed. Over the course of 4 days, the structure was successfully dried to pre-loss conditions.`,
    floorPlans: [
        { room: "Kitchen", l: 15.0, w: 12.0, h: 9.0, sqft: 180.00 },
        { room: "Dining Room", l: 12.5, w: 11.0, h: 9.0, sqft: 137.50 },
        { room: "Living Room", l: 20.0, w: 14.5, h: 18.0, sqft: 290.00 },
        { room: "Hallway", l: 16.0, w: 4.0, h: 9.0, sqft: 64.00 }
    ],
    photos: [
        { id: 1, room: "Kitchen", date: "3/18/2026", url: "https://placehold.co/400x300/f97316/ffffff?text=Kitchen+Source", caption: "Source of Loss: Ruptured supply line under sink." },
        { id: 2, room: "Kitchen", date: "3/18/2026", url: "https://placehold.co/400x300/1f2937/ffffff?text=Kitchen+Extraction", caption: "Initial Extraction: 2 inches of standing water." },
        { id: 3, room: "Living Room", date: "3/19/2026", url: "https://placehold.co/400x300/1f2937/ffffff?text=Hardwood+Demo", caption: "Demo: Removing saturated engineered hardwood." },
        { id: 4, room: "Living Room", date: "3/22/2026", url: "https://placehold.co/400x300/10b981/ffffff?text=Final+Dry", caption: "Final: Studs and subfloor verified dry." }
    ],
    chambers: [
        { chamber: "Chamber 1", locations: "Kitchen, Dining Room", volume: "2,400 CF" },
        { chamber: "Chamber 2", locations: "Living Room, Hallway", volume: "3,100 CF" }
    ],
    equipment: [
        { installDate: "3/18/2026", pullDate: "3/22/2026", days: 4, type: "LGR Dehumidifier (Large)", chamber: "1", room: "Kitchen", powerKW: 0.64, notes: "Placed near sink." },
        { installDate: "3/18/2026", pullDate: "3/22/2026", days: 4, type: "Axial Air Mover", chamber: "1", room: "Kitchen", powerKW: 0.18, notes: "Directing air at toe kicks." },
        { installDate: "3/18/2026", pullDate: "3/22/2026", days: 4, type: "Axial Air Mover", chamber: "1", room: "Dining Room", powerKW: 0.18, notes: "Along South wall." },
        { installDate: "3/18/2026", pullDate: "3/22/2026", days: 4, type: "LGR Dehumidifier (X-Large)", chamber: "2", room: "Living Room", powerKW: 0.85, notes: "Center of room." },
        { installDate: "3/19/2026", pullDate: "3/22/2026", days: 3, type: "Centrifugal Air Mover", chamber: "2", room: "Living Room", powerKW: 0.25, notes: "Added Day 2 for subfloor." },
        { installDate: "3/18/2026", pullDate: "3/22/2026", days: 4, type: "HEPA Air Scrubber", chamber: "2", room: "Hallway", powerKW: 0.32, notes: "Running 24/7 during demo phase." }
    ],
    atmospheric: [
        { date: "3/18", out: "72°F / 45%", un: "74°F / 50%", ch: "70°F / 85%", de: "85°F / 25%", dep: "35 / 15 GPP", depVal: 20, sh: "93.4 g/kg" },
        { date: "3/19", out: "75°F / 42%", un: "74°F / 48%", ch: "82°F / 45%", de: "95°F / 18%", dep: "42 / 12 GPP", depVal: 30, sh: "74.8 g/kg" }
    ],
    moisture: [
        { room: "Kitchen", mat: "Drywall (Base)", surfT: "72°F", std: "8%", d1: "99%", d2: "45%", d3: "15%", d4: "8% (Dry)" },
        { room: "Kitchen", mat: "Wood Studs", surfT: "71°F", std: "12%", d1: "40%", d2: "28%", d3: "18%", d4: "11% (Dry)" },
        { room: "Living Room", mat: "Plywood Subfloor", surfT: "73°F", std: "10%", d1: "99%", d2: "60%", d3: "25%", d4: "9% (Dry)" },
        { room: "Dining Room", mat: "Drywall (Base)", surfT: "72°F", std: "8%", d1: "80%", d2: "35%", d3: "12%", d4: "7% (Dry)" }
    ],
    demolition: [
        { room: "Kitchen", item: "Laminate Flooring", qty: "140 SQFT", afterHrs: "Yes", justify: "Cat 3 water migration underneath vapor barrier. Unsalvageable." },
        { room: "Kitchen", item: "Base-cabinets (Lower)", qty: "8 LF", afterHrs: "Yes", justify: "Particle board structure swelled and lost structural integrity." },
        { room: "Living Room", item: "Engineered Hardwood", qty: "320 SQFT", afterHrs: "No", justify: "Fully saturated, edges cupping, delamination occurring. Removed to dry subfloor." },
        { room: "All Affected", item: "Drywall (2ft Flood Cut)", qty: "110 LF", afterHrs: "Yes", justify: "Remove wet insulation, prevent mold amplification inside wall cavities, and allow airflow to sill plates." }
    ],
    aiPushback: [
        { pushback: "Adjuster Question: Why were the kitchen base cabinets removed instead of detached and reset?", justification: "The cabinets were constructed of particle board, which absorbed category 3 water and swelled by 20%, permanently compromising their structural integrity. Secondary mold growth was highly probable if left in place." },
        { pushback: "Adjuster Question: 4 days of drying seems excessive for 2 rooms. Standard is 3.", justification: "The plywood subfloor in the living room retained significant trapped moisture under the hardwood glue lines. Target dry standard of 10% was not reached until the morning of Day 4. Pulling equipment early would risk secondary damage." }
    ],
    timeLogs: [
        { date: "3/18/2026", tech: "John Doe, Mike Smith", arrive: "06:00 PM", end: "11:30 PM", travel: "45", demo: "240", during: "0.0", after: "11.0" },
        { date: "3/19/2026", tech: "John Doe", arrive: "09:00 AM", end: "10:30 AM", travel: "30", demo: "0", during: "1.5", after: "0.0" },
        { date: "3/20/2026", tech: "Mike Smith", arrive: "10:00 AM", end: "11:00 AM", travel: "30", demo: "0", during: "1.0", after: "0.0" },
        { date: "3/21/2026", tech: "John Doe", arrive: "02:00 PM", end: "04:30 PM", travel: "45", demo: "0", during: "2.5", after: "0.0" }
    ],
    siteConditions: {
        generals: [
            "Trash Dumpster Bags (6x)",
            "Antimicrobial Botanical Disinfectant (2 Gallons)",
            "Plastic Sheeting 4-mil (1 Roll)",
            "Half-Face Respirators with P100 cartridges (worn by all techs)",
            "Nitrile Disposable Gloves (1 Box)",
            "Tyvek Suits (2x)"
        ],
        notes: "Extenuating Circumstances: Plumber was delayed on Day 1 by 3 hours, meaning extraction could not begin until 6:00 PM (After Hours). Homeowner also requested we do not park in the driveway, resulting in a longer equipment haul distance."
    }
};

const app = {
    mockData: {},

    init: function() {
        // Load persist state
        const saved = localStorage.getItem('entrustedData');
        if (saved) {
            this.mockData = JSON.parse(saved);
        } else {
            this.mockData = JSON.parse(JSON.stringify(defaultMockData));
        }

        this.renderAll();

        // Global Search
        document.getElementById('global-search').addEventListener('input', (e) => this.handleSearch(e.target.value));
    },

    saveData: function() {
        localStorage.setItem('entrustedData', JSON.stringify(this.mockData));
        this.showSaveToast();
    },

    resetData: function() {
        if(confirm("Are you sure you want to reset all data and signatures to defaults?")) {
            localStorage.removeItem('entrustedData');
            location.reload();
        }
    },

    showSaveToast: function() {
        const toast = document.getElementById('save-toast');
        toast.classList.remove('opacity-0', 'pointer-events-none');
        toast.classList.add('opacity-100');
        setTimeout(() => {
            toast.classList.remove('opacity-100');
            toast.classList.add('opacity-0', 'pointer-events-none');
        }, 2500);
    },

    renderAll: function() {
        this.renderHeaders();
        this.renderTimeline();
        this.renderStory();
        this.renderFloorPlans();
        this.renderPhotos('all');
        this.renderChambers();
        this.renderEquipment();
        this.renderAtmospheric();
        this.renderMoisture();
        this.renderDemolition();
        this.renderAIPushback();
        this.renderTimeLogs();
        this.renderSiteConditions();
    },

    updateField: function(section, field, value) {
        if (section === 'job') {
            this.mockData.job[field] = value;
            this.renderHeaders();
        } else if (section === 'story') {
            this.mockData.story = value;
        }
        this.saveData();
    },

    switchView: function(viewId) {
        document.querySelectorAll('.view-section').forEach(view => {
            view.classList.add('hidden');
            view.classList.remove('active');
        });
        const targetView = document.getElementById(viewId);
        targetView.classList.remove('hidden');
        targetView.classList.add('active');

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('bg-gray-800', 'text-white', 'active');
            btn.classList.add('text-gray-300');
            if(btn.dataset.target === viewId) {
                btn.classList.add('bg-gray-800', 'text-white', 'active');
                btn.classList.remove('text-gray-300');
            }
        });
    },

    renderHeaders: function() {
        document.getElementById('sidebar-job-name').innerText = this.mockData.job.name || "Unknown Job";
        document.getElementById('sidebar-job-id').innerText = this.mockData.job.id || "--";
        
        document.getElementById('edit-job-name').value = this.mockData.job.name || "";
        document.getElementById('edit-job-addr').value = this.mockData.job.address || "";
        document.getElementById('edit-job-id').value = this.mockData.job.id || "";
        document.getElementById('edit-job-claim').value = this.mockData.job.claim || "";
    },

    getRoomLabel: function(roomName) {
        const fp = this.mockData.floorPlans.find(f => f.room === roomName);
        if(!fp) return roomName;
        const vol = (fp.l * fp.w * fp.h).toFixed(0);
        return `${roomName} <br/><span class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">L: ${fp.l}' x W: ${fp.w}' x H: ${fp.h}' | Vol: ${vol} CF</span>`;
    },

    renderTimeline: function() {
        const statsEl = document.getElementById('timeline-stats');
        statsEl.innerHTML = `
            <div><p class="text-xs text-gray-400 uppercase font-semibold">Date of Loss</p><p class="font-bold text-gray-800">${this.mockData.job.dateOfLoss}</p></div>
            <div><p class="text-xs text-gray-400 uppercase font-semibold">Install Date</p><p class="font-bold text-gray-800">${this.mockData.equipment[0]?.installDate || '--'}</p></div>
            <div><p class="text-xs text-gray-400 uppercase font-semibold">Drying Days</p><p class="font-bold text-gray-800">${this.mockData.job.totalDryingDays}</p></div>
            <div><p class="text-xs text-gray-400 uppercase font-semibold">Pull Date</p><p class="font-bold text-gray-800">${this.mockData.equipment[0]?.pullDate || '--'}</p></div>
        `;

        const contentEl = document.getElementById('timeline-content');
        contentEl.innerHTML = this.mockData.timeline.map((item, index) => `
            <div class="relative pl-6" data-searchable>
                <div class="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1 border-2 border-white shadow"></div>
                <h4 class="font-bold text-gray-900">${item.phase} <span class="text-xs ml-2 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">${item.dates}</span></h4>
                <p class="text-xs text-gray-600 mt-1">${item.description}</p>
            </div>
        `).join('');
    },

    renderStory: function() {
        document.getElementById('edit-job-story').value = this.mockData.story;
    },

    renderFloorPlans: function() {
        const tbody = document.getElementById('floor-plan-tbody');
        if(!tbody) return;
        tbody.innerHTML = this.mockData.floorPlans.map(item => `
            <tr class="hover:bg-gray-50" data-searchable>
                <td class="px-6 py-4 font-medium text-gray-900">${item.room}</td>
                <td class="px-6 py-4 text-right">${parseFloat(item.l).toFixed(1)}</td>
                <td class="px-6 py-4 text-right">${parseFloat(item.w).toFixed(1)}</td>
                <td class="px-6 py-4 text-right font-bold text-gray-800">${parseFloat(item.sqft).toFixed(2)}</td>
            </tr>
        `).join('');
    },

    renderPhotos: function(filterType) {
        document.querySelectorAll('.photo-filter-btn').forEach(btn => {
            btn.classList.remove('active', 'bg-sidebar', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-600');
        });
        if(filterType === 'all') document.querySelectorAll('.photo-filter-btn')[0].classList.add('active', 'bg-sidebar', 'text-white');
        if(filterType === 'room') document.querySelectorAll('.photo-filter-btn')[1].classList.add('active', 'bg-sidebar', 'text-white');
        if(filterType === 'date') document.querySelectorAll('.photo-filter-btn')[2].classList.add('active', 'bg-sidebar', 'text-white');

        let sorted = [...this.mockData.photos];
        if (filterType === 'room') {
            sorted.sort((a,b) => a.room.localeCompare(b.room));
        } else if (filterType === 'date') {
            sorted.sort((a,b) => a.date.localeCompare(b.date));
        }

        const el = document.getElementById('photo-gallery-content');
        el.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${sorted.map((p, idx) => `
                <div class="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col group relative" data-searchable>
                    <button onclick="app.deletePhoto(${idx})" class="absolute top-2 left-2 bg-red-500 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"><i class="fa fa-times text-xs"></i></button>
                    <div class="h-48 bg-gray-100 relative overflow-hidden">
                        <img src="${p.url}" class="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" alt="Photo" />
                        <div class="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm shadow">${p.date}</div>
                    </div>
                    <div class="p-3 flex-1 flex flex-col">
                        <p class="text-xs font-bold text-orange-600 uppercase mb-1">${p.room}</p>
                        <p class="text-xs text-gray-700 leading-snug">${p.caption}</p>
                    </div>
                </div>
            `).join('')}
        </div>`;
    },

    handlePhotoUpload: function(event) {
        const files = event.target.files;
        if (!files || files.length === 0) return;
        
        let room = document.getElementById('photo-room-input').value || "General Area";
        let date = new Date().toLocaleDateString('en-US'); // Current date
        
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.mockData.photos.push({
                    id: Date.now() + Math.random(),
                    room: room,
                    date: date,
                    url: e.target.result,
                    caption: `Uploaded Evidence: ${file.name}`
                });
                this.renderPhotos('all');
                this.saveData();
            };
            reader.readAsDataURL(file);
        }
        
        // Reset inputs
        event.target.value = "";
        document.getElementById('photo-room-input').value = "";
    },

    deletePhoto: function(index) {
        if(confirm("Delete this photo?")) {
            this.mockData.photos.splice(index, 1);
            this.renderPhotos('all');
            this.saveData();
        }
    },

    renderChambers: function() {
        const el = document.getElementById('chamber-info-content');
        el.innerHTML = this.mockData.chambers.map(c => `
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 flex-1" data-searchable>
                <div class="flex items-center justify-between mb-4">
                    <h4 class="font-bold text-gray-900">${c.chamber}</h4>
                    <span class="text-xs font-mono bg-orange-100 text-orange-800 px-2 py-1 rounded">${c.volume}</span>
                </div>
                <div class="space-y-3">
                    <p class="text-xs text-gray-500 uppercase tracking-wide border-b border-gray-200 pb-1">Included Rooms:</p>
                    <p class="text-sm font-medium text-gray-700 leading-relaxed">${c.locations.split(',').map(r => this.getRoomLabel(r.trim())).join('<div class="h-2"></div>')}</p>
                </div>
            </div>
        `).join('');
    },

    renderEquipment: function() {
        const tbody = document.getElementById('equipment-inventory-tbody');
        tbody.innerHTML = this.mockData.equipment.map(item => `
            <tr class="hover:bg-gray-50" data-searchable>
                <td class="px-6 py-4">${item.installDate}</td>
                <td class="px-6 py-4">${item.days}</td>
                <td class="px-6 py-4 font-medium text-gray-900">${item.type}</td>
                <td class="px-6 py-4 font-semibold text-gray-700">${item.room} <span class="text-xs font-normal text-gray-500 ml-1">(${item.chamber})</span></td>
                <td class="px-6 py-4 text-right font-mono">${(item.powerKW || 0).toFixed(2)}</td>
                <td class="px-6 py-4 text-right font-mono font-bold text-emerald-700 bg-emerald-50">${((item.powerKW || 0) * 24 * item.days).toFixed(2)}</td>
                <td class="px-6 py-4 text-xs italic text-gray-500">${item.notes}</td>
            </tr>
        `).join('');
    },

    // PSYCHROMETRIC ENGINE CALCULATION
    calcGPP: function(tempF, rh) {
        if(!tempF || !rh) return 0;
        const tC = (parseFloat(tempF) - 32) * 5/9;
        const svp = 6.112 * Math.exp((17.67 * tC) / (tC + 243.5));
        const avp = svp * (parseFloat(rh) / 100);
        const w = 0.622 * avp / (1013.25 - avp);
        return Math.round(w * 7000); // Grains per pound
    },

    calcSH: function(tempF, rh) {
        if(!tempF || !rh) return 0;
        const tC = (parseFloat(tempF) - 32) * 5/9;
        const svp = 6.112 * Math.exp((17.67 * tC) / (tC + 243.5));
        const avp = svp * (parseFloat(rh) / 100);
        const w = 0.622 * avp / (1013.25 - avp);
        return (w * 1000).toFixed(1); // Specific humidity in g/kg
    },

    addPsychEntry: function() {
        const date = document.getElementById('psych-date').value || new Date().toLocaleDateString('en-US', {month:'numeric', day:'numeric'});
        
        const outT = document.getElementById('psych-out-t').value;
        const outRH = document.getElementById('psych-out-rh').value;
        const unT = document.getElementById('psych-un-t').value;
        const unRH = document.getElementById('psych-un-rh').value;
        const chT = document.getElementById('psych-ch-t').value;
        const chRH = document.getElementById('psych-ch-rh').value;
        const deT = document.getElementById('psych-de-t').value;
        const deRH = document.getElementById('psych-de-rh').value;

        if(!chT || !chRH || !deT || !deRH) {
            alert("Chamber and Dehu Out Temp/RH are required to calculate Grains of Depression.");
            return;
        }

        const chGPP = this.calcGPP(chT, chRH);
        const deGPP = this.calcGPP(deT, deRH);
        const dep = chGPP - deGPP;
        const sh = this.calcSH(chT, chRH);

        const formatStr = (t, r) => (t && r) ? `${t}°F / ${r}%` : `--`;
        
        this.mockData.atmospheric.push({
            date: date,
            out: formatStr(outT, outRH),
            un: formatStr(unT, unRH),
            ch: formatStr(chT, chRH),
            de: formatStr(deT, deRH),
            dep: `${chGPP} / ${deGPP} GPP`,
            depVal: dep,
            sh: `${sh} g/kg`
        });

        // Clear inputs
        document.querySelectorAll('[id^="psych-"]').forEach(i => i.value = '');

        this.renderAtmospheric();
        this.saveData();
    },

    renderAtmospheric: function() {
        const tbody = document.getElementById('atmospheric-log-tbody');
        tbody.innerHTML = this.mockData.atmospheric.map(item => `
            <tr class="hover:bg-gray-50" data-searchable>
                <td class="px-6 py-4 font-medium text-gray-900">${item.date}</td>
                <td class="px-6 py-4 text-gray-600">${item.out}</td>
                <td class="px-6 py-4 text-gray-600">${item.un}</td>
                <td class="px-6 py-4 text-gray-600 font-semibold">${item.ch}</td>
                <td class="px-6 py-4 text-blue-600 font-semibold">${item.de}</td>
                <td class="px-6 py-4 text-blue-800 font-mono font-bold bg-blue-50">${item.sh}</td>
                <td class="px-6 py-4 bg-orange-50 font-mono text-sm">
                    <div class="flex items-center justify-between">
                        <span class="text-orange-900 font-semibold">${item.depVal > 0 ? '+' : ''}${item.depVal} Depression</span>
                        <span class="text-xs text-orange-500">${item.dep}</span>
                    </div>
                </td>
            </tr>
        `).join('');
    },

    renderMoisture: function() {
        const tbody = document.getElementById('moisture-mapping-tbody');
        tbody.innerHTML = this.mockData.moisture.map(item => `
            <tr class="hover:bg-gray-50" data-searchable>
                <td class="px-6 py-4 font-medium text-gray-900">${item.room}</td>
                <td class="px-6 py-4 text-gray-600">${item.mat}</td>
                <td class="px-6 py-4 text-purple-700 font-bold bg-purple-50">${item.surfT || '--'}</td>
                <td class="px-6 py-4 text-gray-500 bg-gray-100 uppercase text-xs font-bold text-center">${item.std}</td>
                <td class="px-6 py-4 text-red-600 font-bold">${item.d1}</td>
                <td class="px-6 py-4 text-orange-500">${item.d2}</td>
                <td class="px-6 py-4 text-yellow-600">${item.d3}</td>
                <td class="px-6 py-4 text-emerald-600 font-bold bg-emerald-50">${item.d4}</td>
            </tr>
        `).join('');
    },

    renderDemolition: function() {
        const tbody = document.getElementById('demo-scope-tbody');
        tbody.innerHTML = this.mockData.demolition.map(item => `
            <tr class="hover:bg-gray-50" data-searchable>
                <td class="px-6 py-4 font-medium text-gray-900 leading-tight">${this.getRoomLabel(item.room)}</td>
                <td class="px-6 py-4 text-gray-700">${item.item}</td>
                <td class="px-6 py-4 text-orange-600 font-bold">${item.qty}</td>
                <td class="px-6 py-4 text-center">
                    ${item.afterHrs === 'Yes' ? '<span class="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Yes</span>' : '<span class="text-gray-400">-</span>'}
                </td>
                <td class="px-6 py-4 text-sm text-gray-600 italic bg-gray-50 border-l border-white">${item.justify}</td>
            </tr>
        `).join('');
    },

    // HTML5 Canvas Signature Pad
    initSignaturePad: function() {
        const canvas = document.getElementById('signature-pad');
        if(!canvas) return;

        this.sigPad = canvas;
        const ctx = canvas.getContext('2d');
        
        // Prevent scrolling when touching canvas
        canvas.addEventListener('touchstart', (e) => { e.preventDefault(); }, {passive: false});
        canvas.addEventListener('touchmove', (e) => { e.preventDefault(); }, {passive: false});

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        const getPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            let clientX = e.clientX;
            let clientY = e.clientY;
            
            if (e.touches && e.touches.length > 0) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            }
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        };

        const startDraw = (e) => {
            this.isDrawing = true;
            const pos = getPos(e);
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        };

        const draw = (e) => {
            if (!this.isDrawing) return;
            const pos = getPos(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.stroke();
        };

        const stopDraw = () => {
            if(this.isDrawing) {
                this.isDrawing = false;
                // Save signature data map to local storage
                this.mockData.signature = canvas.toDataURL('image/png');
                this.saveData();
                document.getElementById('saved-sig-container').classList.remove('hidden');
                document.getElementById('saved-sig-img').src = this.mockData.signature;
            }
        };

        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDraw);
        canvas.addEventListener('mouseout', stopDraw);
        
        canvas.addEventListener('touchstart', startDraw);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', stopDraw);
    },

    resizeCanvas: function() {
        if(!this.sigPad) return;
        const parent = this.sigPad.parentElement;
        this.sigPad.width = parent.offsetWidth;
        this.sigPad.height = parent.offsetHeight;
        const ctx = this.sigPad.getContext('2d');
        ctx.clearRect(0, 0, this.sigPad.width, this.sigPad.height);
        
        // If we have an existing signature, don't clear it natively but rely on the saved img
    },

    clearSignature: function() {
        if(!this.sigPad) return;
        const ctx = this.sigPad.getContext('2d');
        ctx.clearRect(0, 0, this.sigPad.width, this.sigPad.height);
        this.mockData.signature = null;
        this.saveData();
        document.getElementById('saved-sig-container').classList.add('hidden');
        document.getElementById('saved-sig-img').src = '';
    },

    renderAIPushback: function() {
        const el = document.getElementById('ai-pushback-content');
        el.innerHTML = this.mockData.aiPushback.map(item => `
            <div class="bg-gray-50 rounded-lg p-5 border border-gray-100" data-searchable>
                <p class="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-2"><i class="fa-solid fa-user-shield text-gray-400 mr-2"></i> ${item.pushback}</p>
                <p class="text-sm text-gray-600"><span class="font-bold text-orange-600 mr-1">Justification:</span> ${item.justification}</p>
            </div>
        `).join('');
    },

    renderTimeLogs: function() {
        const uniqueDays = new Set(this.mockData.timeLogs.map(log => log.date)).size;
        const checksCount = this.mockData.timeLogs.filter(log => log.demo === "0" && log.after === "0.0").length || 3;
        
        document.getElementById('metric-days').textContent = uniqueDays;
        document.getElementById('metric-checks').textContent = checksCount;

        const tbody = document.getElementById('time-logs-tbody');
        tbody.innerHTML = this.mockData.timeLogs.map(item => `
            <tr class="hover:bg-gray-50" data-searchable>
                <td class="px-6 py-4 font-medium text-gray-900">${item.date}</td>
                <td class="px-6 py-4 text-gray-700">${item.tech}</td>
                <td class="px-6 py-4 text-indigo-700 font-semibold uppercase">${item.arrive}</td>
                <td class="px-6 py-4 text-indigo-700 font-semibold uppercase">${item.end}</td>
                <td class="px-6 py-4 text-right text-gray-600">${item.travel}</td>
                <td class="px-6 py-4 text-right text-gray-600">${item.demo}</td>
                <td class="px-6 py-4 text-right font-medium text-gray-800">${item.during}</td>
                <td class="px-6 py-4 text-right font-medium ${item.after !== '0.0' ? 'text-red-600 bg-red-50' : 'text-gray-400'}">${item.after}</td>
            </tr>
        `).join('');
    },

    renderSiteConditions: function() {
        const el = document.getElementById('site-conditions-content');
        el.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-searchable>
                <div>
                    <h4 class="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Consumables & PPE</h4>
                    <ul class="list-disc pl-5 space-y-1 text-gray-600">
                        ${this.mockData.siteConditions.generals.map(g => `<li>${g}</li>`).join('')}
                    </ul>
                </div>
                <div class="bg-orange-50 bg-opacity-50 border border-orange-200 rounded-lg p-4">
                    <h4 class="font-bold text-orange-800 mb-2 flex items-center"><i class="fa-solid fa-triangle-exclamation mr-2"></i> Notes & Delays</h4>
                    <p class="text-gray-700 leading-relaxed">${this.mockData.siteConditions.notes}</p>
                </div>
            </div>
        `;
    },

    handleSearch: function(query) {
        query = query.toLowerCase();
        document.querySelectorAll('[data-searchable]').forEach(el => {
            if (el.innerText.toLowerCase().includes(query)) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    },

    exportToPDF: async function(cardId) {
        const el = document.getElementById(cardId);
        if (!el) return;
        
        el.style.borderRadius = "0px";
        el.style.boxShadow = "none";
        el.style.border = "1px solid #e2e8f0";
        
        const buttons = el.querySelectorAll('button');
        buttons.forEach(b => b.style.display = 'none');
        // Hide file inputs for printing
        el.querySelectorAll('label, input[type=file]').forEach(b => { if(b.innerText.includes('Add Photos')) b.style.display = 'none'; });

        const canvas = await html2canvas(el, { scale: 2, backgroundColor: "#ffffff", useCORS: true });
        
        buttons.forEach(b => b.style.display = ''); 
        el.querySelectorAll('label, input[type=file]').forEach(b => { if(b.innerText.includes('Add Photos')) b.style.display = ''; });
        
        el.style.borderRadius = "";
        el.style.boxShadow = "";
        el.style.border = "";

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF('p', 'pt', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgProps = pdf.getImageProperties(imgData);
        const margin = 20;
        const width = pdfWidth - (margin * 2);
        const height = (imgProps.height * width) / imgProps.width;

        pdf.addImage(imgData, 'PNG', margin, margin, width, height);
        pdf.save(`${cardId}.pdf`);
    },

    generateCombinedPDF: async function(reportType) {
        let cardIds = [];
        let filename = "";
        let isPhotoReport = false;

        if (reportType === '24hr') {
            cardIds = ['card-job-info', 'card-timeline', 'card-job-story'];
            filename = '24-Hour-Report.pdf';
        } else if (reportType === 'dmo') {
            cardIds = ['card-job-info', 'card-demo-scope'];
            filename = 'DMO-Approval-Report.pdf';
        } else if (reportType === 'adjuster') {
            cardIds = ['card-job-info', 'card-timeline', 'card-job-story', 'card-floor-plans', 'card-equipment-inventory', 'card-atmospheric-log', 'card-moisture-mapping', 'card-demo-scope', 'card-ai-pushback'];
            filename = 'Comprehensive-Adjuster-Report.pdf';
        } else if (reportType === 'photo') {
            cardIds = ['card-job-info']; 
            filename = 'Categorized-Photo-Report.pdf';
            isPhotoReport = true;
        }

        if (cardIds.length === 0) return;

        const allViews = document.querySelectorAll('.view-section');
        const activeViewId = Array.from(allViews).find(v => v.classList.contains('active'))?.id;

        allViews.forEach(v => {
            v.classList.remove('hidden');
            v.style.display = 'block';
        });

        if (isPhotoReport) this.renderPhotos('all');

        const pdf = new jspdf.jsPDF('p', 'pt', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        let currentY = 20;
        const margin = 20;
        
        if (reportType === 'adjuster') {
            // Enterprise Cover Page
            pdf.setFillColor(2, 6, 23); // bg-slate-950
            pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
            
            pdf.setTextColor(249, 115, 22); // primary orange
            pdf.setFontSize(40);
            pdf.setFont("helvetica", "bold");
            pdf.text("ENTRUSTED", pdfWidth/2, pdfHeight/3 - 20, {align: 'center'});
            
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(22);
            pdf.text("COMPREHENSIVE ADJUSTER REPORT", pdfWidth/2, pdfHeight/3 + 30, {align: 'center'});
            
            pdf.setFontSize(14);
            pdf.setFont("helvetica", "normal");
            pdf.text(`Claim ID: ${this.mockData.job.claim}`, pdfWidth/2, pdfHeight/2 + 20, {align: 'center'});
            pdf.text(`Date of Loss: ${this.mockData.job.dateOfLoss}`, pdfWidth/2, pdfHeight/2 + 50, {align: 'center'});
            pdf.text(`Insurance Company: Standard Carrier Setup`, pdfWidth/2, pdfHeight/2 + 80, {align: 'center'});
            pdf.text(`Project Manager: Assigned Mitigation PM`, pdfWidth/2, pdfHeight/2 + 110, {align: 'center'});
            
            pdf.addPage();
            
            // Table of Contents
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(28);
            pdf.setFont("helvetica", "bold");
            pdf.text("Table of Contents", margin, 80);
            pdf.setFontSize(14);
            pdf.setFont("helvetica", "normal");
            
            const toc = [
                "1. Job Information & Lifecycle Progression",
                "2. Job Story Narrative",
                "3. Floor Plans & Measurements",
                "4. Chamber Setup & Mitigation Equipment Inventory",
                "5. Daily Atmospheric Logs & Psychrometrics",
                "6. Material Moisture Mapping",
                "7. Demolition Scope & Justifications",
                "8. AI Adjuster Review Analysis"
            ];
            
            let ty = 140;
            toc.forEach(item => {
                pdf.text(item, margin, ty);
                ty += 35;
            });
            
            pdf.addPage();
            currentY = 40;
        } else {
            pdf.setFontSize(16);
            pdf.text(`Entrusted Restoration - ${filename.replace('.pdf', '').replace(/-/g, ' ')}`, margin, currentY);
            currentY += 30;
        }

        for (const id of cardIds) {
            currentY = await this.renderElementToPDF(document.getElementById(id), pdf, margin, currentY, pdfWidth, pdfHeight);
        }

        if (isPhotoReport) {
            const photoGalleryContent = document.getElementById('photo-gallery-content');
            if (photoGalleryContent) {
                const photoCards = Array.from(photoGalleryContent.children[0].children); 
                
                pdf.setFontSize(14);
                if (currentY + 60 > pdfHeight - margin) {
                    pdf.addPage();
                    currentY = 40;
                }
                currentY += 20;
                pdf.text("Photo Documentation:", margin, currentY);
                currentY += 20;

                for (let i = 0; i < photoCards.length; i++) {
                    const card = photoCards[i];
                    card.style.width = '350px'; 
                    // Hide delete buttons
                    const deleteBtn = card.querySelector('button');
                    if(deleteBtn) deleteBtn.style.display = 'none';

                    try {
                        const canvas = await html2canvas(card, { scale: 2, useCORS: true, logging: false, backgroundColor: "#ffffff" });
                        const imgData = canvas.toDataURL('image/jpeg', 0.8);
                        const imgProps = pdf.getImageProperties(imgData);
                        
                        const drawWidth = pdfWidth * 0.7;
                        const drawHeight = (imgProps.height * drawWidth) / imgProps.width;
                        const drawX = (pdfWidth - drawWidth) / 2;

                        if (currentY + drawHeight > pdfHeight - margin) {
                            pdf.addPage();
                            currentY = 40;
                        }

                        pdf.addImage(imgData, 'JPEG', drawX, currentY, drawWidth, drawHeight);
                        currentY += drawHeight + 30; 
                    } catch(e) { }
                    card.style.width = '';
                    if(deleteBtn) deleteBtn.style.display = '';
                }
            }
        }

        allViews.forEach(v => {
            v.style.display = ''; 
            if (v.id !== activeViewId) {
                v.classList.add('hidden');
                v.classList.remove('active');
            }
        });

        pdf.save(filename);
    },

    renderElementToPDF: async function(el, pdf, margin, currentY, pdfWidth, pdfHeight) {
        if (!el) return currentY;

        const ogBorderRadius = el.style.borderRadius;
        const ogBoxShadow = el.style.boxShadow;
        const ogBorder = el.style.border;
        el.style.borderRadius = "0px";
        el.style.boxShadow = "none";
        el.style.border = "1px solid #e2e8f0";
        
        const buttons = el.querySelectorAll('button');
        buttons.forEach(b => b.style.display = 'none');
        // Hide file inputs for printing
        el.querySelectorAll('label, input[type=file]').forEach(b => { if(b.innerText && b.innerText.includes('Add Photos')) b.style.display = 'none'; });

        try {
            const canvas = await html2canvas(el, { scale: 2, useCORS: true, logging: false, backgroundColor: "#ffffff" });
            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            
            const drawWidth = pdfWidth - (margin * 2);
            const drawHeight = (imgProps.height * drawWidth) / imgProps.width;

            if (currentY + drawHeight > pdfHeight - margin) {
                pdf.addPage();
                currentY = 20; 
            }

            pdf.addImage(imgData, 'PNG', margin, currentY, drawWidth, drawHeight);
            currentY += drawHeight + 20; 

        } catch(e) { }

        el.style.borderRadius = ogBorderRadius;
        el.style.boxShadow = ogBoxShadow;
        el.style.border = ogBorder;
        buttons.forEach(b => b.style.display = ''); 
        el.querySelectorAll('label, input[type=file]').forEach(b => { if(b.innerText && b.innerText.includes('Add Photos')) b.style.display = ''; });

        return currentY;
    }
};

window.addEventListener('DOMContentLoaded', () => {
    app.init();
});
