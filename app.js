const app = {
    mockData: {
        job: {
            id: "MIT-2026-001", claim: "CLM-99881A", name: "Smith Residence", address: "123 Water St, FL",
            dateOfLoss: "3/17/2026", installDate: "3/18/2026", pullDate: "3/22/2026"
        },
        narrativeLogs: [
            { date: "March 18, 2026", room: "Kitchen", notes: "Plumber fixed ruptured supply line under sink. Extracted standing water. Commenced emergency tear-out of lower cabinetry." },
            { date: "March 18, 2026", room: "Living Room", notes: "Extracted standing water from hardwood bounds. Set up primary containment and negative air pressure." },
            { date: "March 19, 2026", room: "Kitchen", notes: "Monitored equipment, moisture levels dropping rapidly. Baseboards removed for enhanced sill plate drying." },
            { date: "March 20, 2026", room: "Living Room", notes: "Engineered hardwood scraped and bagged. Subfloor prepped for aggressive targeted drying." }
        ],
        docs: [
            { name: "Initial Plumbing Report", type: "PDF", date: "3/18/2026" },
            { name: "Direction to Pay (Signed)", type: "PDF", date: "3/18/2026" },
            { name: "Certificate of Satisfaction (COS)", type: "PDF", date: "3/22/2026" }
        ],
        timeLogs: [
            { date: "3/18/2026", tech: "John Doe, Mike Smith", arrive: "06:00 PM", end: "11:30 PM", afterHrs: true, travel: "45", demo: "240", multiTechJustification: "Required 2 techs for heavy content manipulation and extensive upper cabinet tear-out safely." },
            { date: "3/19/2026", tech: "John Doe", arrive: "09:00 AM", end: "10:30 AM", afterHrs: false, travel: "30", demo: "0", multiTechJustification: "-" },
            { date: "3/20/2026", tech: "Mike Smith", arrive: "10:00 AM", end: "11:00 AM", afterHrs: false, travel: "30", demo: "0", multiTechJustification: "-" },
            { date: "3/21/2026", tech: "John Doe", arrive: "02:00 PM", end: "04:30 PM", afterHrs: false, travel: "45", demo: "0", multiTechJustification: "-" }
        ],
        chambers: [
            { chamber: "Chamber 1", volume: 4203, dimensions: "L: 35' x W: 12' x H: 10'", locations: "Kitchen, Living Room, Dining Room" },
            { chamber: "Chamber 2", volume: 1400, dimensions: "L: 14' x W: 10' x H: 10'", locations: "Master Bath" }
        ],
        equipmentInventory: {
            items: [
                { chamber: "Chamber 1", room: "Kitchen", type: "LGR 7000 Dehumidifier", installDate: "3/18/2026", pullDate: "3/22/2026", days: 4, isDehu: true, ahamAct: 130, notes: "Primary drying unit" },
                { chamber: "Chamber 1", room: "Living Room", type: "Velo Air Mover", installDate: "3/18/2026", pullDate: "3/22/2026", days: 4, isDehu: false, notes: "Pushing air across hardwood" },
                { chamber: "Chamber 1", room: "Dining Room", type: "Velo Pro Air Mover", installDate: "3/18/2026", pullDate: "3/22/2026", days: 4, isDehu: false, notes: "Floating baseboards" },
                { chamber: "Chamber 2", room: "Master Bath", type: "LGR 6000 Dehumidifier", installDate: "3/19/2026", pullDate: "3/22/2026", days: 3, isDehu: true, ahamAct: 100, notes: "Secondary unit." }
            ]
        },
        atmosphericLogs: [
            { notes: "Initial Setup Phase. High humidity noted near sink.", date: "3/18/2026", out: "72°F / 40%", un: "70°F / 45%", ch: "68°F / 60%", sh: "12.4 g/kg", de: "82°F / 20%", desh: "9.2 g/kg", dep: "+3.2" },
            { notes: "Drying progressing normally.", date: "3/19/2026", out: "68°F / 45%", un: "69°F / 42%", ch: "74°F / 48%", sh: "10.1 g/kg", de: "85°F / 15%", desh: "8.1 g/kg", dep: "+2.0" },
            { notes: "Stabilized bounds.", date: "3/20/2026", out: "71°F / 40%", un: "70°F / 40%", ch: "78°F / 35%", sh: "8.1 g/kg", de: "88°F / 12%", desh: "6.5 g/kg", dep: "+1.6" }
        ],
        roomLogs: [
            {
                chamber: "Chamber 1",
                room: "Kitchen",
                moisture: [
                    { mat: "Drywall (Base)", surfT: "72°F", std: "10%", d1: "95%", d2: "45%", d3: "18%", notes: "Baseboard removed to expose track." },
                    { mat: "Sill Plate (Wood)", surfT: "70°F", std: "12%", d1: "45%", d2: "28%", d3: "15%", notes: "Drying firmly." }
                ]
            },
            {
                chamber: "Chamber 1",
                room: "Living Room",
                moisture: [
                    { mat: "Hardwood Subfloor", surfT: "71°F", std: "10%", d1: "99%", d2: "60%", d3: "25%", notes: "Hardwood removed, subfloor drying via mat system." }
                ]
            },
            {
                chamber: "Chamber 2",
                room: "Master Bath",
                moisture: [
                    { mat: "Tile Grout Line", surfT: "74°F", std: "8%", d1: "15%", d2: "10%", d3: "8%", notes: "Injectidry system removed." }
                ]
            }
        ],
        demolition: [
            { room: "Kitchen", dateRemoved: "3/18/2026", item: "Laminate Flooring", qty: "140 SQFT", afterHrs: "Yes", notes: "Day 1: Flooring removed completely down to subfloor.", photoUrl: "https://picsum.photos/seed/demo1/400/300" },
            { room: "Kitchen", dateRemoved: "3/18/2026", item: "Lower Cabinetry", qty: "13 LF", afterHrs: "Yes", notes: "Day 1: Base cabinets detached. Significant water pooling found under toe kicks.", photoUrl: "https://picsum.photos/seed/demo2/400/300" },
            { room: "Living Room", dateRemoved: "3/20/2026", item: "Engineered Hardwood", qty: "320 SQFT", afterHrs: "No", notes: "Day 3: Hardwood was glued down, required heavy scraping.", photoUrl: "https://picsum.photos/seed/demo3/400/300" }
        ],
        photos: [
            { id: 1, room: "Kitchen", phase: "Install", timeframe: "Before", caption: "Initial Source of Loss - Plumb Leak", url: "https://picsum.photos/seed/leak/400/300", date: "March 18, 2026" },
            { id: 2, room: "Kitchen", phase: "Check-in/Monitoring", timeframe: "After", caption: "Post-Demo Wall Cavity", url: "https://picsum.photos/seed/demo2/400/300", date: "March 19, 2026" },
            { id: 3, room: "Living Room", phase: "Install", timeframe: "Before", caption: "Delaminating Hardwood", url: "https://picsum.photos/seed/floor/400/300", date: "March 18, 2026" },
            { id: 4, room: "Living Room", phase: "Check-in/Monitoring", timeframe: "After", caption: "Subfloor Exposed for Drying", url: "https://picsum.photos/seed/dry/400/300", date: "March 20, 2026" }
        ],
        siteConditions: {
            generals: ["N-95 Respirators", "Tyvek Suits", "Nitrile Gloves (Heavy Duty)", "Heavy Duty Trash Bags (40 ct)", "Disinfectant botanical spray (2 Gal)"],
            extenuating: "Homeowner is elderly and present in the home; significant care taken to erect strong containment barriers with clean zippers to isolate the living areas from the kitchen demo zone."
        }
    },

    init: function() {
        this.renderApp();

        // Setup Photo Filters
        const dates = [...new Set(this.mockData.photos.map(p => p.date))];
        const dateSelect = document.getElementById('photo-date-filter');
        dates.forEach(d => { dateSelect.innerHTML += `<option value="${d}">${d}</option>`; });

        document.getElementById('photo-search').addEventListener('input', () => this.renderPhotos());
        document.getElementById('photo-date-filter').addEventListener('change', () => this.renderPhotos());
        document.getElementById('photo-phase-filter').addEventListener('change', () => this.renderPhotos());
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
            btn.classList.add('text-gray-400');
            if(btn.dataset.target === viewId) {
                btn.classList.add('bg-gray-800', 'text-white', 'active');
                btn.classList.remove('text-gray-400');
            }
        });
    },

    renderApp: function() {
        const d = this.mockData;

        // Header
        document.getElementById('sidebar-job-name').innerText = d.job.name;
        document.getElementById('sidebar-job-id').innerText = d.job.id;
        document.getElementById('header-name').innerText = d.job.name;
        document.getElementById('header-address').innerText = d.job.address;
        document.getElementById('header-claim').innerText = d.job.claim;
        document.getElementById('tab1-job-number').innerText = d.job.id;

        // Structured Narrative
        const datesGrouped = [...new Set(d.narrativeLogs.map(x => x.date))];
        let storyHTML = '';
        datesGrouped.forEach(dateStr => {
            storyHTML += `
            <div class="mb-5 last:mb-0">
                <h3 class="font-black text-slate-800 text-sm uppercase tracking-widest border-b border-gray-200 pb-1 mb-3"><i class="fa-regular fa-calendar text-primary mr-1"></i> ${dateStr}</h3>
                <div class="space-y-3 pl-2 border-l-2 border-gray-100 ml-1.5">`;
            
            const logsForDate = d.narrativeLogs.filter(x => x.date === dateStr);
            logsForDate.forEach(log => {
                storyHTML += `
                    <div class="bg-gray-50 rounded p-3 text-sm text-gray-700 leading-relaxed border border-gray-100 shadow-sm flex items-start">
                        <span class="font-bold text-slate-900 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-200 text-xs mr-3 shrink-0 mt-0.5">${log.room}</span>
                        <span>${log.notes}</span>
                    </div>`;
            });
            storyHTML += `</div></div>`;
        });
        document.getElementById('story-content').innerHTML = storyHTML;
        
        // Documents
        document.getElementById('docs-content').innerHTML = d.docs.map(doc => `
            <div class="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex items-center justify-between hover:border-primary transition-colors cursor-pointer group">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded bg-red-50 text-red-500 flex items-center justify-center text-lg"><i class="fa-solid fa-file-pdf"></i></div>
                    <div>
                        <p class="font-bold text-gray-900 text-sm">${doc.name}</p>
                        <p class="text-[10px] text-gray-500 font-mono uppercase tracking-widest">${doc.date}</p>
                    </div>
                </div>
                <button class="text-gray-400 group-hover:text-primary transition-colors"><i class="fa-solid fa-download"></i></button>
            </div>
        `).join('');

        this.renderPhotos();

        // -----------------------------------------------------
        // TAB 2: MOISTURE LOGS, CHAMBERS & EQUIPMENT
        // -----------------------------------------------------

        // Section 1: Atmospheric Logs Table
        document.getElementById('atmospheric-tbody').innerHTML = d.atmosphericLogs.map(item => `
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-5 py-3 text-xs italic text-gray-500 leading-tight">${item.notes}</td>
                <td class="px-5 py-3 font-bold text-slate-800 border-l border-gray-200 whitespace-nowrap">${item.date}</td>
                <td class="px-5 py-3 text-center text-slate-500">${item.out}</td>
                <td class="px-5 py-3 text-center text-slate-500">${item.un}</td>
                <td class="px-5 py-3 text-center font-semibold text-slate-800">${item.ch} <br/><span class="text-[9px] text-slate-400 font-mono">${item.sh}</span></td>
                <td class="px-5 py-3 text-center font-bold text-blue-700 bg-blue-50/30">${item.de} <br/><span class="text-[9px] text-blue-400 font-mono">${item.desh}</span></td>
                <td class="px-5 py-3 text-center font-black text-slate-800 border-l border-gray-200">${item.dep}</td>
            </tr>
        `).join('');

        // Section 2: Chambers & Equipment Inventories
        let chamberNodesHTML = '';
        d.chambers.forEach(c => {
            const locs = c.locations.split(',').map(r => r.trim()).join('<span class="mx-2 text-slate-300">|</span>');
            
            // Calculate Required AHAM dynamically based on "Class 2" constraint (CF / 50)
            const reqPPD = Math.ceil(c.volume / 50);

            chamberNodesHTML += `
            <div class="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                
                <!-- CHAMBER HEADER -->
                <div class="bg-slate-100 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200">
                    <div>
                        <h3 class="font-black text-slate-900 text-lg tracking-tight uppercase">${c.chamber}</h3>
                        <p class="text-[11px] font-semibold text-slate-600 mt-1">${locs}</p>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <span class="font-black text-blue-900 bg-blue-100 px-3 py-1 rounded shadow-sm text-sm border border-blue-200">Volume: ${c.volume} CF</span>
                        <p class="text-[10px] text-slate-500 font-mono tracking-widest bg-white p-1 px-2 rounded border border-gray-200 shadow-sm">${c.dimensions}</p>
                    </div>
                </div>

                <!-- EQUIPMENT INVENTORY TABLE -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm text-gray-600">
                        <thead class="bg-slate-50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                            <tr>
                                <th class="px-5 py-3 w-1/5">Room Placement</th>
                                <th class="px-5 py-3">Machinery</th>
                                <th class="px-5 py-3 text-center border-l border-gray-200 w-1/5">Date Range</th>
                                <th class="px-5 py-3 text-center bg-blue-50/50 text-blue-800">Days</th>
                                <th class="px-5 py-3 w-1/4 border-l border-gray-200">Equipment Notes</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">`;

            const chamberItems = d.equipmentInventory.items.filter(x => x.chamber === c.chamber);
            chamberItems.forEach(item => {
                let badgeUI = '';
                if (item.isDehu && item.ahamAct) {
                    if (item.ahamAct >= reqPPD) {
                        badgeUI = `
                        <div class="mt-2 text-[10px] font-black tracking-widest uppercase flex items-center text-teal-700 bg-teal-50 border border-teal-200 px-2 py-1 rounded w-max shadow-sm">
                            <i class="fa-solid fa-circle-check mr-1 text-teal-500"></i> AHAM Met (Req: ${reqPPD} | Act: ${item.ahamAct})
                        </div>`;
                    } else {
                        badgeUI = `
                        <div class="mt-2 text-[10px] font-black tracking-widest uppercase flex items-center text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded w-max shadow-sm">
                            <i class="fa-solid fa-triangle-exclamation mr-1 text-red-500"></i> Deficient (Req: ${reqPPD} | Act: ${item.ahamAct})
                        </div>`;
                    }
                }

                chamberNodesHTML += `
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="px-5 py-4 text-slate-900 font-semibold align-top">${item.room}</td>
                                <td class="px-5 py-4 align-top">
                                    <span class="font-black text-slate-800 text-sm block tracking-tight uppercase">${item.type}</span>
                                    ${badgeUI}
                                </td>
                                <td class="px-5 py-4 text-center text-[11px] font-semibold text-slate-600 border-l border-gray-200 align-top">${item.installDate} <span class="mx-1 text-slate-300">→</span><br/>${item.pullDate}</td>
                                <td class="px-5 py-4 text-center font-black text-xl text-blue-800 bg-blue-50/30 align-middle">${item.days}</td>
                                <td class="px-5 py-4 text-xs text-slate-600 border-l border-gray-200 align-top">${item.notes}</td>
                            </tr>`;
            });

            chamberNodesHTML += `
                        </tbody>
                    </table>
                </div>
            </div>`;
        });
        document.getElementById('unified-chamber-content').innerHTML = chamberNodesHTML;

        // Section 3: Material Room Logs Content
        let roomGridsHTML = '';
        d.roomLogs.forEach(roomBlock => {
            roomGridsHTML += `
            <div class="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <div class="bg-slate-200/60 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
                    <h5 class="font-black text-slate-800 uppercase tracking-widest text-xs">${roomBlock.room}</h5>
                    <span class="text-[9px] font-bold text-slate-500 uppercase">${roomBlock.chamber}</span>
                </div>
                <!-- Material Grid -->
                <div class="overflow-x-auto rounded">
                    <table class="w-full text-left text-xs text-gray-600">
                        <thead class="bg-slate-50 text-[9px] uppercase font-bold text-slate-500 tracking-wider">
                            <tr>
                                <th class="px-4 py-3 w-1/4">Associated Tech Notes</th>
                                <th class="px-4 py-3 border-l border-gray-200">Material Component</th>
                                <th class="px-4 py-3 text-center border-r border-gray-200">Dry Std %</th>
                                <th class="px-4 py-3 text-center">Surface T (°F)</th>
                                <th class="px-4 py-3 text-center bg-blue-50/50">Day 1</th>
                                <th class="px-4 py-3 text-center bg-blue-50/50">Day 2</th>
                                <th class="px-4 py-3 text-center bg-blue-50/50">Day 3</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            ${roomBlock.moisture.map(item => `
                                <tr class="hover:bg-slate-50">
                                    <td class="px-4 py-3 text-[11px] italic text-gray-500 leading-tight">${item.notes}</td>
                                    <td class="px-4 py-3 font-bold text-slate-800 border-l border-gray-200">${item.mat}</td>
                                    <td class="px-4 py-3 font-bold text-slate-500 text-center border-r border-gray-200">${item.std}</td>
                                    <td class="px-4 py-3 text-center font-bold text-slate-600">${item.surfT}</td>
                                    <td class="px-4 py-3 text-center font-black text-blue-800 bg-blue-50/20">${item.d1}</td>
                                    <td class="px-4 py-3 text-center font-black text-blue-800 bg-blue-50/20">${item.d2}</td>
                                    <td class="px-4 py-3 text-center font-black text-blue-800 bg-blue-50/20">${item.d3}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        });
        document.getElementById('room-logs-content').innerHTML = roomGridsHTML;

        // Demolition (View 3)
        const roomsGrouped = [...new Set(d.demolition.map(x => x.room))];
        let demoHTML = '';
        roomsGrouped.forEach(roomStr => {
            demoHTML += `<tr class="bg-slate-200 border-y border-gray-300"><td colspan="6" class="px-6 py-3 font-black text-slate-900 uppercase tracking-widest text-xs">${roomStr}</td></tr>`;
            const lines = d.demolition.filter(x => x.room === roomStr);
            lines.forEach(item => {
                demoHTML += `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-6 py-4 text-slate-800 font-semibold pl-10">${item.item}</td>
                    <td class="px-6 py-4 text-center font-semibold text-slate-600">${item.dateRemoved}</td>
                    <td class="px-6 py-4 text-center font-black text-blue-800">${item.qty}</td>
                    <td class="px-6 py-4 text-center">
                        ${item.afterHrs === 'Yes' ? '<span class="bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-widest">Yes</span>' : '<span class="text-slate-300">-</span>'}
                    </td>
                    <td class="px-6 py-4 text-sm text-slate-700 border-l border-gray-200">${item.notes}</td>
                    <td class="px-6 py-4 text-center">
                        <a href="${item.photoUrl}" target="_blank" class="text-primary hover:text-primaryDark hover:underline font-bold text-xs uppercase tracking-wide flex items-center justify-center"><i class="fa-regular fa-image mr-1"></i> View</a>
                    </td>
                </tr>`;
            });
        });
        document.getElementById('demolition-tbody').innerHTML = demoHTML;


        // Time Logs (View 4)
        const uniqueDays = new Set(d.timeLogs.map(log => log.date)).size;
        const checksCount = d.timeLogs.filter(log => log.demo === "0").length;
        document.getElementById('metric-days').innerText = uniqueDays;
        document.getElementById('metric-checks').innerText = checksCount;

        document.getElementById('time-logs-tbody').innerHTML = d.timeLogs.map(item => `
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-6 py-4 font-bold text-slate-900 align-top">
                    ${item.date}
                    ${item.afterHrs ? '<br/><span class="bg-indigo-900 text-white text-[9px] px-2 py-0.5 rounded shadow uppercase tracking-widest font-bold inline-block mt-1"><i class="fa-solid fa-moon text-indigo-300 mr-1"></i> After Hrs</span>' : ''}
                </td>
                <td class="px-6 py-4 text-slate-800 border-x border-gray-200 font-medium align-top">${item.tech}</td>
                <td class="px-6 py-4 text-center font-bold text-slate-700 tracking-wide align-top">${item.arrive} - ${item.end}</td>
                <td class="px-6 py-4 text-center font-mono text-blue-800 bg-blue-50/20 align-top">${item.travel}</td>
                <td class="px-6 py-4 text-center font-mono font-bold text-blue-800 bg-blue-50/20 align-top">${item.demo}</td>
                <td class="px-6 py-4 text-sm text-slate-700 border-l border-gray-200 align-top">${item.multiTechJustification}</td>
            </tr>
        `).join('');

        // Generals
        document.getElementById('site-conditions-content').innerHTML = `
            <div>
                <h4 class="font-bold text-slate-900 mb-3 border-b border-gray-200 pb-2">Consumables & PPE</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700 font-medium">
                    ${d.siteConditions.generals.map(g => `<li>${g}</li>`).join('')}
                </ul>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded p-4">
                <h4 class="font-bold text-slate-800 mb-2 flex items-center text-sm uppercase tracking-wide"><i class="fa-solid fa-clipboard text-slate-500 mr-2"></i> Extenuating Circumstances / Notes</h4>
                <p class="text-sm text-slate-800 leading-relaxed">${d.siteConditions.extenuating}</p>
            </div>
        `;
    },

    renderPhotos: function() {
        const searchTerm = document.getElementById('photo-search').value.toLowerCase();
        const dateFilter = document.getElementById('photo-date-filter').value;
        const phaseFilter = document.getElementById('photo-phase-filter').value;
        
        let filtered = this.mockData.photos;
        
        if (dateFilter !== "All") {
            filtered = filtered.filter(p => p.date === dateFilter);
        }
        if (phaseFilter !== "All") {
            filtered = filtered.filter(p => p.phase === phaseFilter);
        }
        if (searchTerm) {
            filtered = filtered.filter(p => 
                p.caption.toLowerCase().includes(searchTerm) || 
                p.room.toLowerCase().includes(searchTerm) ||
                p.timeframe.toLowerCase().includes(searchTerm)
            );
        }

        document.getElementById('photos-grid').innerHTML = filtered.map(p => `
            <div class="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col group relative">
                <div class="h-40 bg-slate-100 relative overflow-hidden">
                    <img src="${p.url}" class="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" alt="Photo" />
                    <div class="absolute top-2 right-2 flex space-x-1">
                        <div class="bg-black/60 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded backdrop-blur-sm shadow">${p.phase}</div>
                    </div>
                </div>
                <div class="p-4 flex-1 flex flex-col items-center text-center">
                    <p class="text-[10px] font-black tracking-widest text-primary uppercase mb-1">${p.room}</p>
                    <p class="text-xs text-slate-800 font-semibold leading-snug">${p.caption}</p>
                    <p class="text-[10px] text-slate-400 font-mono mt-2">${p.date}</p>
                </div>
            </div>
        `).join('') || `<p class="col-span-full text-center text-slate-500 font-medium py-8">No photos matched your search criteria.</p>`;
    },

    exportToPDF: async function(cardId) {
        const element = document.getElementById(cardId);
        if (!element) return;
        
        const controlsHidden = [];
        const buttons = element.querySelectorAll('button');
        const controls = element.querySelector('#photo-controls');
        const pdfCheckboxes = element.querySelectorAll('.pdf-controls');
        
        buttons.forEach(b => { b.style.display = 'none'; controlsHidden.push(b); });
        pdfCheckboxes.forEach(cb => { cb.style.display = 'none'; controlsHidden.push(cb); });
        if(controls) { controls.style.display = 'none'; controlsHidden.push(controls); }

        const canvas = await html2canvas(element, { scale: 2, backgroundColor: "#ffffff" });
        
        controlsHidden.forEach(el => el.style.display = '');

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF('p', 'pt', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgProps = pdf.getImageProperties(imgData);
        const margin = 20;
        const drawWidth = pdfWidth - (margin * 2);
        const drawHeight = (imgProps.height * drawWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', margin, margin, drawWidth, drawHeight);
        pdf.save(`${cardId}.pdf`);
    },

    renderElementToPDF: async function(element, pdf, margin, currentY, pdfWidth, pdfHeight) {
        if (!element) return currentY;
        
        element.style.borderRadius = "0px";
        element.style.boxShadow = "none";
        element.style.border = "1px solid #e2e8f0";

        const controlsHidden = [];
        const buttons = element.querySelectorAll('button');
        const controls = element.querySelector('#photo-controls');
        const pdfCheckboxes = element.querySelectorAll('.pdf-controls');
        
        buttons.forEach(b => { b.style.display = 'none'; controlsHidden.push(b); });
        pdfCheckboxes.forEach(cb => { cb.style.display = 'none'; controlsHidden.push(cb); });
        if(controls) { controls.style.display = 'none'; controlsHidden.push(controls); }

        const canvas = await html2canvas(element, { scale: 2, backgroundColor: "#ffffff" });
        
        element.style.borderRadius = "";
        element.style.boxShadow = "";
        element.style.border = "";
        controlsHidden.forEach(el => el.style.display = '');

        const imgData = canvas.toDataURL('image/png');
        const imgProps = pdf.getImageProperties(imgData);
        const drawWidth = pdfWidth - (margin * 2);
        const drawHeight = (imgProps.height * drawWidth) / imgProps.width;

        if (currentY + drawHeight > pdfHeight - margin) {
            pdf.addPage();
            currentY = margin;
        }

        pdf.addImage(imgData, 'PNG', margin, currentY, drawWidth, drawHeight);
        return currentY + drawHeight + margin;
    },

    generatePDF: async function(reportType) {
        let cardIds = [];
        let filename = "";

        if (reportType === 'custom') {
            const checkboxes = document.querySelectorAll('.pdf-checkbox:checked');
            if (checkboxes.length === 0) {
                alert("Please select at least one section using the checkboxes before generating a custom report.");
                return;
            }
            checkboxes.forEach(cb => cardIds.push(cb.dataset.card));
            if (!cardIds.includes('card-job-info')) cardIds.unshift('card-job-info');
            filename = 'Custom-Mitigation-Report.pdf';
        } else {
            if (reportType === '24hr') {
                cardIds = ['card-job-info', 'card-story'];
                filename = '24-Hour-Report.pdf';
            } else if (reportType === 'dmo') {
                cardIds = ['card-job-info', 'card-demolition'];
                filename = 'DMO-Approval-Report.pdf';
            } else if (reportType === 'adjuster') {
                cardIds = ['card-job-info', 'card-story', 'card-chamber-logs', 'card-demolition', 'card-photos'];
                filename = 'Slim-Adjuster-Report.pdf';
            } else if (reportType === 'photo') {
                cardIds = ['card-job-info', 'card-photos']; 
                filename = 'Job-Photo-Report.pdf';
            } else if (reportType === '3k') {
                cardIds = ['card-job-info', 'card-story', 'card-chamber-logs', 'card-time-logs', 'card-site'];
                filename = '3k-Limit-Exception-Request.pdf';
            }
        }

        if (cardIds.length === 0) return;

        const allViews = document.querySelectorAll('.view-section');
        allViews.forEach(v => {
            v.classList.remove('hidden');
            v.style.display = 'block'; 
        });

        const pdf = new jspdf.jsPDF('p', 'pt', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        let currentY = 20;
        const margin = 20;

        for (const id of cardIds) {
            currentY = await this.renderElementToPDF(document.getElementById(id), pdf, margin, currentY, pdfWidth, pdfHeight);
        }

        pdf.save(filename);

        allViews.forEach(v => {
            v.style.display = ''; 
            if(!v.classList.contains('active')) {
                v.classList.add('hidden');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
