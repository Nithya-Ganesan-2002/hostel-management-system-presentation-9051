---
theme: seriph
title: Hostel Management System — Interactive Presentation
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Inter'
---

# Hostel Management System
Modern, minimal, and interactive overview

<style src="./styles.css"></style>

<div class="mt-6">
  <HmsHeaderBar title="Overview" subtitle="Flows, Screens, and Insights" />
</div>

<div class="grid-12" style="margin-top:16px;">
  <div class="hms-card" style="grid-column: span 6; padding:16px;">
    <div class="section-title">Highlights</div>
    <ul style="margin-top:10px; line-height:1.7;">
      <li>Student Registration workflow</li>
      <li>Room Allocation process visualization</li>
      <li>Complaint Management demo</li>
      <li>Fee Tracking illustration</li>
      <li>Admin Dashboard mockup</li>
    </ul>
  </div>
  <div class="hms-card" style="grid-column: span 6; padding:16px;">
    <div class="section-title">Interactive Elements</div>
    <ul style="margin-top:10px; line-height:1.7;">
      <li>Buttons, tabs, charts, and code snippets</li>
      <li>Reusable components</li>
      <li>Smooth animations and transitions</li>
      <li>Modern minimalistic styling</li>
    </ul>
  </div>
</div>

<div class="abs-br m-6 text-xl">
  <a href="https://sli.dev" target="_blank" class="slidev-icon-btn">
    <carbon:book />
  </a>
</div>

---

layout: two-cols
---

# Navigation & Sections

<div class="hms-card" style="padding: 14px;">
  <div class="section-title">Quick Jump</div>
  <div class="hms-sidebar" style="margin-top:10px;">
    <div class="hms-pill active" @click="$slidev.nav.go(3)">Student Registration</div>
    <div class="hms-pill" @click="$slidev.nav.go(4)">Room Allocation</div>
    <div class="hms-pill" @click="$slidev.nav.go(5)">Complaint Management</div>
    <div class="hms-pill" @click="$slidev.nav.go(6)">Fee Tracking</div>
    <div class="hms-pill" @click="$slidev.nav.go(7)">Admin Dashboard</div>
  </div>
</div>

::right::

<div class="hms-card" style="padding: 14px;">
  <div class="section-title">Tip</div>
  Use keyboard arrows or click bottom-left controls. Click the pills to jump to a topic.
  <hr class="sep" />
  <div class="section-title">Style</div>
  Modern minimalism with clean grid layouts and accent colors.
  <div style="display:flex; gap:10px; margin-top: 10px;">
    <span class="tag">Primary</span>
    <span class="tag" style="background:#e2e8f0; color:#0f172a;">Secondary</span>
    <span class="tag" style="background:#ffedd5; color:#7c2d12;">Accent</span>
  </div>
</div>

---

# Student Registration

<HmsHeaderBar title="Student Registration" subtitle="Create profile → Upload docs → Assign room later" class="mb-2" />

<HmsTabs :tabs="[
  { id: 'form', label: 'Form' },
  { id: 'review', label: 'Review' },
  { id: 'confirm', label: 'Confirm' },
]">
  <template #default="{ active }">
    <div v-if="active === 'form'" class="grid-12">
      <div class="hms-card" style="grid-column: span 7; padding: 16px;">
        <div class="section-title">Registration Form (Mock)</div>
        <div class="mock" style="padding: 14px; margin-top: 8px;">
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
              <div class="badge">First Name</div>
              <div class="mock" style="height:36px; margin-top:6px;"></div>
            </div>
            <div>
              <div class="badge">Last Name</div>
              <div class="mock" style="height:36px; margin-top:6px;"></div>
            </div>
            <div style="grid-column: span 2;">
              <div class="badge">Email</div>
              <div class="mock" style="height:36px; margin-top:6px;"></div>
            </div>
            <div>
              <div class="badge">Phone</div>
              <div class="mock" style="height:36px; margin-top:6px;"></div>
            </div>
            <div>
              <div class="badge">Department</div>
              <div class="mock" style="height:36px; margin-top:6px;"></div>
            </div>
          </div>
          <div style="display:flex; gap:10px; margin-top: 12px;">
            <button class="hms-btn">Save Draft</button>
            <button class="hms-btn hms-btn--primary">Continue</button>
          </div>
        </div>
      </div>
      <div class="hms-card" style="grid-column: span 5; padding: 16px;">
        <div class="section-title">Progress</div>
        <div class="hms-progress" style="margin-top:8px; --progress: 45%;">
          <span />
        </div>
        <div class="stat" style="margin-top: 12px;">
          <span class="label">Fields Completed</span>
          <span class="value">9 / 20</span>
        </div>
        <div class="stat">
          <span class="label">Documents Uploaded</span>
          <span class="value">2 / 4</span>
        </div>
      </div>
    </div>

    <div v-else-if="active === 'review'" class="grid-12">
      <HmsMockTable
        style="grid-column: span 12;"
        title="Review Details"
        :headers="['Field','Value']"
        :rows="[
          { Field: 'Name', Value: 'Alex Doe' },
          { Field: 'Email', Value: 'alex@example.com' },
          { Field: 'Department', Value: 'Computer Science' },
          { Field: 'Phone', Value: '+1 555 011' },
        ]"
        note="Confirm before submission. You may go back to edit."
      />
    </div>

    <div v-else class="grid-12">
      <div class="hms-card" style="grid-column: span 7; padding: 16px;">
        <div class="section-title">Confirmation</div>
        <div class="mock" style="padding: 14px; margin-top: 8px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div class="tag">Student ID</div>
            <strong>#HMS-2025-00172</strong>
          </div>
          <p style="margin-top: 10px; color: var(--color-secondary);">
            Registration successful. Next step: Room Allocation
          </p>
          <div style="margin-top: 12px;">
            <HmsFlowButtons @action="(a)=> (a==='next') && $slidev.nav.next()" />
          </div>
        </div>
      </div>
      <div class="hms-card" style="grid-column: span 5; padding: 16px;">
        <HmsSimpleChart
          title="Registrations by Department"
          :items="[
            { label: 'CSE', value: 48 },
            { label: 'ECE', value: 32, color:'#16a34a' },
            { label: 'ME', value: 14, color:'#f97316' },
            { label: 'CE', value: 8, color:'#6b7280' },
          ]"
        />
      </div>
    </div>
  </template>
</HmsTabs>

---

# Room Allocation

<HmsHeaderBar title="Room Allocation" subtitle="Capacity, availability, and assignment" class="mb-2" />

<div class="grid-12">
  <div class="hms-card" style="grid-column: span 7; padding: 16px;">
    <div class="section-title">Allocation Flow</div>
    <div class="mock" style="padding: 14px; margin-top: 8px;">
      <ol style="line-height:1.8;">
        <li>Select Hostel → Floor → Room</li>
        <li>Check Capacity and Current Occupancy</li>
        <li>Assign based on Preferences/Constraints</li>
        <li>Confirm and Notify Student</li>
      </ol>
      <div style="display:flex; gap:10px; margin-top: 12px;">
        <button class="hms-btn">Auto-Allocate</button>
        <button class="hms-btn hms-btn--primary" @click="$slidev.nav.next()">Manual Allocate</button>
      </div>
    </div>
  </div>
  <div class="hms-card" style="grid-column: span 5; padding: 16px;">
    <HmsSimpleChart
      title="Occupancy by Hostel"
      :items="[
        { label: 'A', value: 92 },
        { label: 'B', value: 76, color:'#16a34a' },
        { label: 'C', value: 58, color:'#f97316' },
        { label: 'D', value: 40, color:'#6b7280' },
      ]"
    />
  </div>
</div>

---

# Complaint Management

<HmsHeaderBar title="Complaint Management" subtitle="Log → Triage → Resolve → Feedback" class="mb-2" />

<HmsTabs :tabs="[
  { id: 'log', label: 'Log' },
  { id: 'triage', label: 'Triage' },
  { id: 'resolve', label: 'Resolve' },
]">
  <template #default="{ active }">
    <div v-if="active === 'log'" class="grid-12">
      <div class="hms-card" style="grid-column: span 7; padding: 16px;">
        <div class="section-title">New Complaint</div>
        <div class="mock" style="padding: 14px; margin-top: 8px;">
          <div class="badge">Title</div>
          <div class="mock" style="height: 36px; margin-top: 6px;"></div>
          <div class="badge" style="margin-top:10px;">Category</div>
          <div class="mock" style="height: 36px; margin-top: 6px;"></div>
          <div class="badge" style="margin-top:10px;">Description</div>
          <div class="mock" style="height: 88px; margin-top: 6px;"></div>
          <div style="display:flex; gap:10px; margin-top: 12px;">
            <button class="hms-btn">Save</button>
            <button class="hms-btn hms-btn--primary">Submit</button>
          </div>
        </div>
      </div>
      <div class="hms-card" style="grid-column: span 5; padding: 16px;">
        <HmsMockTable
          title="Recent Tickets"
          :headers="['ID','Title','Status']"
          :rows="[
            { ID: '#T-341', Title: 'Leaky faucet', Status: 'Open' },
            { ID: '#T-342', Title: 'WiFi issue', Status: 'Pending' },
            { ID: '#T-343', Title: 'Light flicker', Status: 'Resolved' },
          ]"
        />
      </div>
    </div>

    <div v-else-if="active === 'triage'" class="grid-12">
      <HmsMockTable
        style="grid-column: span 12;"
        title="Triage Board"
        :headers="['ID','Severity','Assignee','ETA','Status']"
        :rows="[
          { ID: '#T-351', Severity: 'High', Assignee: 'Admin A', ETA: '4h', Status: 'In-Progress' },
          { ID: '#T-352', Severity: 'Medium', Assignee: 'Admin B', ETA: '1d', Status: 'Queued' },
          { ID: '#T-353', Severity: 'Low', Assignee: 'Admin C', ETA: '2d', Status: 'Open' },
        ]"
        note="Prioritize high severity issues first."
      />
    </div>

    <div v-else class="grid-12">
      <div class="hms-card" style="grid-column: span 7; padding: 16px;">
        <div class="section-title">Resolution</div>
        <div class="mock" style="padding: 14px; margin-top: 8px;">
          <p class="badge">Technician Report (mock)</p>
          <div class="mock" style="height: 90px; margin-top: 6px;"></div>
          <div style="display:flex; gap:10px; margin-top: 12px;">
            <button class="hms-btn">Request Feedback</button>
            <button class="hms-btn hms-btn--primary" @click="$slidev.nav.next()">Close Ticket</button>
          </div>
        </div>
      </div>
      <div class="hms-card" style="grid-column: span 5; padding: 16px;">
        <HmsSimpleChart
          title="Complaints by Category"
          :items="[
            { label: 'Plumbing', value: 22 },
            { label: 'Electrical', value: 18, color:'#16a34a' },
            { label: 'Internet', value: 15, color:'#f97316' },
            { label: 'Other', value: 9, color:'#6b7280' },
          ]"
        />
      </div>
    </div>
  </template>
</HmsTabs>

---

# Fee Tracking

<HmsHeaderBar title="Fee Tracking" subtitle="Invoices, payments, dues" class="mb-2" />

<div class="grid-12">
  <div class="hms-card" style="grid-column: span 7; padding: 16px;">
    <div class="section-title">Invoices</div>
    <HmsMockTable
      :headers="['Invoice','Student','Amount','Status']"
      :rows="[
        { Invoice: '#INV-001', Student:'Alex D', Amount: '$1,200', Status: 'Paid' },
        { Invoice: '#INV-002', Student:'Sam K', Amount: '$1,200', Status: 'Pending' },
        { Invoice: '#INV-003', Student:'Kim L', Amount: '$1,200', Status: 'Overdue' },
      ]"
      note="Status transitions: Pending → Paid. Overdue triggers reminders."
    />
    <div style="display:flex; gap:10px; margin-top: 12px;">
      <button class="hms-btn">Export CSV</button>
      <button class="hms-btn hms-btn--primary">Send Reminders</button>
    </div>
  </div>
  <div class="hms-card" style="grid-column: span 5; padding: 16px;">
    <HmsSimpleChart
      title="Payments (This Month)"
      :items="[
        { label: 'Paid', value: 86 },
        { label: 'Pending', value: 22, color:'#f97316' },
        { label: 'Overdue', value: 7, color:'#ef4444' },
      ]"
    />
  </div>
</div>

---

# Admin Dashboard

<HmsHeaderBar title="Admin Dashboard" subtitle="At-a-glance metrics and actions" class="mb-2" />

<div class="grid-12">
  <div class="stat" style="grid-column: span 3;">
    <span class="label">Total Students</span>
    <span class="value">1,248</span>
  </div>
  <div class="stat" style="grid-column: span 3;">
    <span class="label">Occupied Rooms</span>
    <span class="value">462</span>
  </div>
  <div class="stat" style="grid-column: span 3;">
    <span class="label">Active Complaints</span>
    <span class="value accent">36</span>
  </div>
  <div class="stat" style="grid-column: span 3;">
    <span class="label">On-time Payments</span>
    <span class="value">93%</span>
  </div>

  <div class="hms-card" style="grid-column: span 7; padding:16px; margin-top: 12px;">
    <div class="section-title">Activity</div>
    <div class="mock" style="height: 180px; margin-top: 8px;"></div>
    <div style="display:flex; gap:10px; margin-top: 12px;">
      <button class="hms-btn">Refresh</button>
      <button class="hms-btn hms-btn--primary" @click="$slidev.nav.next()">Open Reports</button>
    </div>
  </div>

  <div class="hms-card" style="grid-column: span 5; padding:16px; margin-top: 12px;">
    <HmsSimpleChart
      title="Room Availability (by Floor)"
      :items="[
        { label: 'F1', value: 12 },
        { label: 'F2', value: 18, color:'#16a34a' },
        { label: 'F3', value: 9, color:'#f59e0b' },
        { label: 'F4', value: 6, color:'#6b7280' },
      ]"
    />
  </div>
</div>

---

layout: center
class: text-center
---

# Thank You

Navigate back anytime using the sidebar pills in earlier slides.
<PoweredBySlidev mt-6 />
