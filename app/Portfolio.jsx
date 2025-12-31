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

      {/* EXPERIENCE, CERTIFICATIONS, CONTACT */}
      {/* Keep the rest of your code here unchanged */}
    </div>
  );
}
