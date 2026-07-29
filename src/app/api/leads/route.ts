import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface LeadSubmission {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  domain: string;
  candidateCount: string;
  location: string;
  deliveryMode: string;
  createdAt: string;
}

const DATA_FILE = path.join(process.cwd(), "src", "data", "leads.json");

// Helper to ensure file exists and read leads
function readLeadsFromFile(): LeadSubmission[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      const dir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content || "[]");
  } catch (error) {
    console.error("Error reading leads file:", error);
    return [];
  }
}

// Helper to save leads
function saveLeadsToFile(leads: LeadSubmission[]) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving leads file:", error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, domain, candidateCount, location, deliveryMode } = body;

    // Validation
    if (!name || !email || !company || !phone) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields (Name, Email, Company, Phone)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid official email address." },
        { status: 400 }
      );
    }

    const newLead: LeadSubmission = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      domain: domain || "Generative AI & ML",
      candidateCount: candidateCount || "10-50",
      location: location || "India",
      deliveryMode: deliveryMode || "Hybrid",
      createdAt: new Date().toISOString(),
    };

    const existingLeads = readLeadsFromFile();
    existingLeads.unshift(newLead);
    saveLeadsToFile(existingLeads);

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully! Our enterprise consultant will contact you within 24 hours.",
      lead: newLead,
    });
  } catch (error) {
    console.error("API error in /api/leads:", error);
    return NextResponse.json(
      { success: false, message: "An internal error occurred while saving your request." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const leads = readLeadsFromFile();
  return NextResponse.json({ success: true, count: leads.length, leads });
}
