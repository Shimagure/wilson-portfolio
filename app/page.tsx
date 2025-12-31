"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ShieldCheck, Laptop, Network } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-zinc-100">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl font-bold">
          Wilson DC. Chiquito
        </motion.h1>
        <p className="mt-4 text-xl text-zinc-400">
          End User Computing Technician · IT Support · Microsoft 365 Admin
        </p>
        <p className="mt-6 max-w-2xl text-zinc-300">
          I’m an IT support specialist focused on keeping users productive and systems reliable. I handle Microsoft 365 administration, Active Directory, hardware troubleshooting, and end‑user support in fast‑paced enterprise environments.
        </p>
        <div className="mt-8 flex gap-4">
          <Button>View Experience</Button>
          <Button variant="secondary">Download Resume</Button>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-zinc-900/60 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Card>
              <CardContent className="p-6">
                <Laptop className="mb-3" />
                <h3 className="font-semibold">End‑User Support</h3>
                <p className="text-sm text-zinc-400 mt-2">
                  Desktop, laptop, and mobile troubleshooting with a calm, user‑first approach.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Network className="mb-3" />
                <h3 className="font-semibold">Systems & Networking</h3>
                <p className="text-sm text-zinc-400 mt-2">
                  Active Directory, permissions, security groups, and network troubleshooting.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <ShieldCheck className="mb-3" />
                <h3 className="font-semibold">Security & Admin</h3>
                <p className="text-sm text-zinc-400 mt-2">
                  Microsoft 365 admin, onboarding, access control, and cybersecurity fundamentals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="mt-8 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">End User Computing Technician</h3>
              <p className="text-sm text-zinc-400">Solaire Resort & Casino · 2023–Present</p>
              <ul className="list-disc ml-4 mt-3 text-sm text-zinc-300 space-y-1">
                <li>Microsoft 365 account management and onboarding</li>
                <li>Active Directory administration and access control</li>
                <li>Hardware, OS, and device troubleshooting</li>
                <li>Escalated issue resolution in a high‑pressure environment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Web Design / Networking Trainee</h3>
              <p className="text-sm text-zinc-400">Bulacan State Agricultural University · 2022</p>
              <p className="text-sm text-zinc-300 mt-2">
                Assisted in website creation, design, and basic networking tasks.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-zinc-900/60 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Certifications</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-zinc-300">
            <li>Linux System Administration (2024)</li>
            <li>Fortinet NSE 3 (2023)</li>
            <li>Fortinet Cybersecurity Fundamentals (2023)</li>
            <li>Cisco Networking Basics (2023)</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold">Let’s Connect</h2>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Button variant="secondary"><Mail className="mr-2 h-4 w-4" /> wlsnchqt@gmail.com</Button>
          <Button variant="secondary"><Phone className="mr-2 h-4 w-4" /> +63 976 044 9125</Button>
        </div>
      </section>
    </div>
  );
}
