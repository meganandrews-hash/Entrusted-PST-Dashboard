const app = {
    mockData: {
        job: {
            id: "MIT-2026-001", claim: "CLM-99881A", name: "Smith Residence", address: "123 Water St, FL",
            dateOfLoss: "3/17/2026", installDate: "3/18/2026", pullDate: "3/22/2026"
        },
        story: "Upon arrival at the Smith Residence, the source of the loss was determined to be a ruptured supply line under the kitchen sink, which flooded the Kitchen, adjacent Dining Room, and Living Room. Water had been standing for approximately 12 hours before our arrival, classifying this as a Category 3 (grossly unsanitary) loss due to time and potential bacterial growth.\n\nWe immediately began extraction and emergency structural demolition to prevent secondary damage.",
        docs: [
            { name: "Initial Plumbing Report", type: "PDF", date: "3/18/2026" },
            { name: "Direction to Pay (Signed)", type: "PDF", date: "3/18/2026" },
            { name: "Certificate of Satisfaction (COS)", type: "PDF", date: "3/22/2026" }
        ],
        timeLogs: [
            { date: "3/18/2026", tech: "John Doe, Mike Smith", arrive: "06:00 PM", end: "11:30 PM", travel: "45", demo: "240", multiTechJustification: "Required 2 techs for heavy content manipulation and extensive upper cabinet tear-out safely." },
            { date: "3/19/2026", tech: "John Doe", arrive: "09:00 AM", end: "10:30 AM", travel: "30", demo: "0", multiTechJustification: "-" },
            { date: "3/20/2026", tech: "Mike Smith", arrive: "10:00 AM", end: "11:00 AM", travel: "30", demo: "0", multiTechJustification: "-" },
            { date: "3/21/2026", tech: "John Doe", arrive: "02:00 PM", end: "04:30 PM", travel: "45", demo: "0", multiTechJustification: "-" }
        ],
        floorPlans: [
            { room: "Kitchen", l: 15.0, w: 12.0, h: 9.0, sqft: 180 },
            { room: "Living Room", l: 20.0, w: 14.5, h: 10.0, sqft: 290 },
            { room: "Dining Room", l: 12.5, w: 11.0, h: 9.0, sqft: 137.5 }
        ],
        chambers: [
            { chamber: "Chamber 1 (Main)", volume: "4203 CF", locations: "Kitchen, Living Room, Dining Room" }
        ],
        equipment: [
            { type: "LGR 7000 Dehumidifier", room: "Kitchen", days: 4, installDate: "3/18/2026", pullDate: "3/22/2026" },
            { type: "Air Mover (Axial)", room: "Kitchen", days: 4, installDate: "3/18/2026", pullDate: "3/22/2026" },
            { type: "Air Mover (Centrifugal)", room: "Living Room", days: 4, installDate: "3/18/2026", pullDate: "3/22/2026" },
            { type: "Air Mover (Centrifugal)", room: "Dining Room", days: 4, installDate: "3/18/2026", pullDate: "3/22/2026" }
        ],
        atmospheric: [
            { date: "3/18/2026", out: "72°F / 40%", un: "70°F / 45%", ch: "68°F / 60%", sh: "12.4 g/kg", de: "82°F / 20%", desh: "9.2 g/kg", dep: "+3.2 g/kg (45 GPP)" },
            { date: "3/19/2026", out: "68°F / 45%", un: "69°F / 42%", ch: "74°F / 48%", sh: "10.1 g/kg", de: "85°F / 15%", desh: "8.1 g/kg", dep: "+2.0 g/kg (30 GPP)" },
            { date: "3/20/2026", out: "75°F / 50%", un: "70°F / 45%", ch: "75°F / 40%", sh: "8.5 g/kg", de: "88°F / 12%", desh: "7.0 g/kg", dep: "+1.5 g/kg (20 GPP)" }
        ],
        moisture: [
            { room: "Kitchen", mat: "Drywall (Base)", surfT: "72°F", std: "10%", d1: "95%", d2: "45%", d3: "18%" },
            { room: "Kitchen", mat: "Sill Plate (Wood)", surfT: "70°F", std: "12%", d1: "45%", d2: "28%", d3: "15%" },
            { room: "Living Room", mat: "Hardwood Subfloor", surfT: "71°F", std: "10%", d1: "99%", d2: "60%", d3: "25%" }
        ],
        demolition: [
            { room: "Kitchen", dateRemoved: "3/18/2026", item: "Laminate Flooring", qty: "140 SQFT", afterHrs: "Yes", notes: "Day 1: Flooring removed completely down to subfloor. Bagged and hauled off site." },
            { room: "Kitchen", dateRemoved: "3/18/2026", item: "Lower Cabinetry", qty: "13 LF", afterHrs: "Yes", notes: "Day 1: Base cabinets detached. Significant water pooling found under toe kicks." },
            { room: "Living Room", dateRemoved: "3/20/2026", item: "Engineered Hardwood", qty: "320 SQFT", afterHrs: "No", notes: "Day 3: Hardwood was glued down, required heavy scraping. Subfloor prepped for drying after initial stabilization delay." }
        ],
        photos: [
            { id: 1, room: "Kitchen", timeframe: "Before", caption: "Initial Source of Loss - Plumb Leak", url: "https://placehold.co/400x300/f97316/ffffff?text=Kitchen+Leak" },
            { id: 2, room: "Kitchen", timeframe: "After", caption: "Post-Demo Wall Cavity", url: "https://placehold.co/400x300/475569/ffffff?text=Kitchen+Demo" },
            { id: 3, room: "Living Room", timeframe: "Before", caption: "Delaminating Hardwood", url: "https://placehold.co/400x300/f97316/ffffff?text=Floor+Damage" },
            { id: 4, room: "Living Room", timeframe: "After", caption: "Subfloor Exposed for Drying", url: "https://placehold.co/400x300/475569/ffffff?text=Subfloor+Drying" }
        ],
        siteConditions: {
            generals: ["N-95 Respirators", "Tyvek Suits", "Nitrile Gloves (Heavy Duty)", "Heavy Duty Trash Bags (40 ct)", "Disinfectant botanical spray (2 Gal)"],
            extenuating: "Homeowner is elderly and present in the home; significant care taken to erect strong containment barriers with clean zippers to isolate the living areas from the kitchen demo zone. Setup required an extra 1.5 hours of focus to ensure a perfect hermetic seal."
        }
    },

    init: function() {
        this.renderApp();

        // Setup Photo Filters
        const rooms = [...new Set(this.mockData.photos.map(p => p.room))];
        const select = document.getElementById('photo-room-filter');
        rooms.forEach(r => {
            select.innerHTML += `<option value="${r}">${r}</option>`;
        });

        document.getElementById('photo-search').addEventListener('input', () => this.renderPhotos());
        document.getElementById('photo-room-filter').addEventListener('change', () => this.renderPhotos());

        // Setup Sketchpad
        this.initSketchpad();
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

    getRoomLabel: function(roomName) {
        const fp = this.mockData.floorPlans.find(f => f.room === roomName);
        if(!fp) return roomName;
        const vol = (fp.l * fp.w * fp.h).toFixed(0);
        return `${roomName} <br/><span class="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mt-1">L: ${fp.l}' x W: ${fp.w}' x H: ${fp.h}' | Vol: ${vol} CF</span>`;
    },

    getRoomLabelLine: function(roomName) {
        const fp = this.mockData.floorPlans.find(f => f.room === roomName);
        if(!fp) return roomName;
        const vol = (fp.l * fp.w * fp.h).toFixed(0);
        return `${roomName} <span class="text-[10px] text-gray-500 ml-2 font-normal uppercase tracking-wider">L: ${fp.l}' x W: ${fp.w}' x H: ${fp.h}' | Vol: ${vol} CF</span>`;
    },

    renderApp: function() {
        const d = this.mockData;

        // Sidebar Header
        document.getElementById('sidebar-job-name').innerText = d.job.name;
        document.getElementById('sidebar-job-id').innerText = d.job.id;

        // Global Header Box
        document.getElementById('header-name').innerText = d.job.name;
        document.getElementById('header-address').innerText = d.job.address;
        document.getElementById('header-claim').innerText = d.job.claim;

        // Tab 1 Specifics
        document.getElementById('tab1-job-number').innerText = d.job.id;
        document.getElementById('story-content').innerText = d.story;
        
        // Documents block
        document.getElementById('docs-content').innerHTML = d.docs.map(doc => `
            <div class="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex items-center justify-between hover:border-primary transition-colors cursor-pointer group">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded bg-red-50 text-red-500 flex items-center justify-center text-lg"><i class="fa-solid fa-file-pdf"></i></div>
                    <div>
                        <p class="font-bold text-gray-900 text-sm">${doc.name}</p>
                        <p class="text-[10px] text-gray-500 font-mono uppercase tracking-widest">${doc.date}</p>
                    </div>
                </div>
                <button class="text-gray-400 group-hover:text-primary transition-colors"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>
        `).join('');

        this.renderPhotos();

        // Psych (View 2)
        document.getElementById('atmospheric-tbody').innerHTML = d.atmospheric.map(item => `
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-bold text-gray-900">${item.date}</td>
                <td class="px-6 py-4 text-gray-500">${item.out}</td>
                <td class="px-6 py-4 text-gray-500">${item.un}</td>
                <td class="px-6 py-4 font-semibold text-gray-800">${item.ch} <br/><span class="text-[10px] text-gray-400 font-mono">${item.sh}</span></td>
                <td class="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">${item.de} <br/><span class="text-[10px] text-blue-400 font-mono">${item.desh}</span></td>
                <td class="px-6 py-4 text-center font-bold text-orange-700 bg-orange-50 bg-opacity-50">${item.dep}</td>
            </tr>
        `).join('');

        // Moisture (View 2)
        document.getElementById('moisture-tbody').innerHTML = d.moisture.map(item => `
            <tr class="hover:bg-gray-50 text-center">
                <td class="px-6 py-4 text-left font-bold text-gray-900">${item.room}</td>
                <td class="px-6 py-4 text-left text-gray-700">${item.mat}</td>
                <td class="px-6 py-4 text-blue-700 font-bold bg-blue-50 border-x border-white">${item.surfT}</td>
                <td class="px-6 py-4 font-bold text-gray-400 bg-gray-50">${item.std}</td>
                <td class="px-6 py-4 font-bold text-red-600">${item.d1}</td>
                <td class="px-6 py-4 font-bold text-orange-500">${item.d2}</td>
                <td class="px-6 py-4 font-bold text-yellow-600">${item.d3}</td>
            </tr>
        `).join('');

        // Demolition (View 3)
        document.getElementById('demolition-tbody').innerHTML = d.demolition.map(item => `
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-bold text-gray-900">${item.room}</td>
                <td class="px-6 py-4 text-center font-semibold text-gray-600">${item.dateRemoved}</td>
                <td class="px-6 py-4 text-gray-800 font-semibold">${item.item}</td>
                <td class="px-6 py-4 text-center font-black text-primary">${item.qty}</td>
                <td class="px-6 py-4 text-center">
                    ${item.afterHrs === 'Yes' ? '<span class="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow uppercase tracking-widest">Yes</span>' : '<span class="text-gray-300">-</span>'}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 italic bg-gray-50 border-l border-white">${item.notes}</td>
            </tr>
        `).join('');

        // Chambers (View 4)
        document.getElementById('chamber-info-content').innerHTML = d.chambers.map(c => {
            const locs = c.locations.split(',').map(r => this.getRoomLabel(r.trim())).join('<div class="h-2 border-b border-gray-100 my-1"></div>');
            return `
            <div class="bg-gray-50 border border-gray-200 rounded p-5 flex-1">
                <div class="flex items-center justify-between mb-4">
                    <h4 class="font-bold text-gray-900">${c.chamber}</h4>
                    <span class="text-xs font-mono bg-orange-100 text-orange-800 px-2 py-1 rounded shadow-sm">Vol: ${c.volume}</span>
                </div>
                <div class="space-y-3">
                    <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest border-b border-gray-200 pb-1">Included Rooms:</p>
                    <p class="text-sm font-medium text-gray-700 leading-relaxed">${locs}</p>
                </div>
            </div>
            `;
        }).join('');

        // Equipment (View 4)
        document.getElementById('equipment-tbody').innerHTML = d.equipment.map(item => `
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-center text-xs font-semibold text-gray-600">${item.installDate}</td>
                <td class="px-6 py-4 text-center text-xs font-semibold text-gray-600">${item.pullDate}</td>
                <td class="px-6 py-4 text-center font-black text-orange-600 bg-orange-50 border-x border-white">${item.days}</td>
                <td class="px-6 py-4 font-bold text-gray-900">${item.type}</td>
                <td class="px-6 py-4 leading-tight">${this.getRoomLabelLine(item.room)}</td>
            </tr>
        `).join('');

        // Time Logs (View 5)
        const uniqueDays = new Set(d.timeLogs.map(log => log.date)).size;
        const checksCount = d.timeLogs.filter(log => log.demo === "0").length;
        document.getElementById('metric-days').innerText = uniqueDays;
        document.getElementById('metric-checks').innerText = checksCount;

        document.getElementById('time-logs-tbody').innerHTML = d.timeLogs.map(item => `
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-bold text-gray-900">${item.date}</td>
                <td class="px-6 py-4 text-gray-800 border-r border-gray-200 font-medium">${item.tech}</td>
                <td class="px-6 py-4 text-indigo-700 font-bold tracking-wide text-center">${item.arrive}</td>
                <td class="px-6 py-4 text-indigo-700 font-bold tracking-wide text-center">${item.end}</td>
                <td class="px-6 py-4 text-center font-mono text-gray-600">${item.travel}</td>
                <td class="px-6 py-4 text-center font-mono font-bold text-primary">${item.demo}</td>
                <td class="px-6 py-4 text-sm text-gray-500 italic bg-gray-50 border-l border-white">${item.multiTechJustification}</td>
            </tr>
        `).join('');

        // Generals (View 5)
        document.getElementById('site-conditions-content').innerHTML = `
            <div>
                <h4 class="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Consumables & PPE</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600 font-medium">
                    ${d.siteConditions.generals.map(g => `<li>${g}</li>`).join('')}
                </ul>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded p-4">
                <h4 class="font-bold text-gray-800 mb-2 flex items-center text-sm uppercase tracking-wide"><i class="fa-solid fa-clipboard text-gray-500 mr-2"></i> Extenuating Circumstances / Notes</h4>
                <p class="text-sm text-gray-700 leading-relaxed font-semibold">${d.siteConditions.extenuating}</p>
            </div>
        `;
    },

    renderPhotos: function() {
        const searchTerm = document.getElementById('photo-search').value.toLowerCase();
        const roomFilter = document.getElementById('photo-room-filter').value;
        
        let filtered = this.mockData.photos;
        
        if (roomFilter !== "All") {
            filtered = filtered.filter(p => p.room === roomFilter);
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
                <div class="h-40 bg-gray-100 relative overflow-hidden">
                    <img src="${p.url}" class="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-duration-300" alt="Photo" />
                    <div class="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded backdrop-blur-sm shadow">${p.timeframe}</div>
                </div>
                <div class="p-4 flex-1 flex flex-col items-center text-center">
                    <p class="text-[10px] font-black tracking-widest text-primary uppercase mb-1">${p.room}</p>
                    <p class="text-xs text-gray-800 font-semibold leading-snug">${p.caption}</p>
                </div>
            </div>
        `).join('') || `<p class="col-span-full text-center text-gray-500 font-medium py-8">No photos matched your search criteria.</p>`;
    },

    initSketchpad: function() {
        const canvas = document.getElementById('sketch-pad');
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        
        // Wait for render to ensure dimensions exist
        setTimeout(() => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#f97316'; // Entrusted Orange ink
        }, 100);

        canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        });
        canvas.addEventListener('mousemove', (e) => {
            if(isDrawing) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
            }
        });
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);
        
        // Touch support
        const getTouchPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            };
        };
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isDrawing = true;
            const pos = getTouchPos(e);
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        }, {passive: false});
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if(!isDrawing) return;
            const pos = getTouchPos(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }, {passive: false});
        canvas.addEventListener('touchend', () => isDrawing = false);
    },

    clearSketch: function() {
        const canvas = document.getElementById('sketch-pad');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    // PDF EXPORT LOGIC
    exportToPDF: async function(cardId) {
        const element = document.getElementById(cardId);
        if (!element) return;
        
        const controlsHidden = [];
        const buttons = element.querySelectorAll('button');
        const controls = element.querySelector('#photo-controls');
        const sketchCtrls = element.querySelector('#sketch-controls');
        
        buttons.forEach(b => { b.style.display = 'none'; controlsHidden.push(b); });
        if(controls) { controls.style.display = 'none'; controlsHidden.push(controls); }
        if(sketchCtrls) { sketchCtrls.style.display = 'none'; controlsHidden.push(sketchCtrls); }

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
        const sketchCtrls = element.querySelector('#sketch-controls');
        
        buttons.forEach(b => { b.style.display = 'none'; controlsHidden.push(b); });
        if(controls) { controls.style.display = 'none'; controlsHidden.push(controls); }
        if(sketchCtrls) { sketchCtrls.style.display = 'none'; controlsHidden.push(sketchCtrls); }

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

        const allViews = document.querySelectorAll('.view-section');
        allViews.forEach(v => {
            v.classList.remove('hidden');
            v.style.display = 'block'; 
        });

        if (reportType === '24hr') {
            cardIds = ['card-job-info', 'card-story', 'card-sketch'];
            filename = '24-Hour-Report.pdf';
        } else if (reportType === 'dmo') {
            cardIds = ['card-job-info', 'card-demolition'];
            filename = 'DMO-Approval-Report.pdf';
        } else if (reportType === 'adjuster') {
            cardIds = ['card-job-info', 'card-story', 'card-sketch', 'card-equipment', 'card-psych', 'card-demolition'];
            filename = 'Comprehensive-Adjuster-Report.pdf';
        } else if (reportType === 'photo') {
            cardIds = ['card-job-info', 'card-photos']; 
            filename = 'Job-Photo-Report.pdf';
        } else if (reportType === '3k') {
            cardIds = ['card-job-info', 'card-story', 'card-equipment', 'card-time-logs', 'card-site'];
            filename = '3k-Limit-Exception-Request.pdf';
        }

        if (cardIds.length === 0) return;

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
