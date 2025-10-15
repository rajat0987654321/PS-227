import React, { useState } from "react";

function Footer() {
  return (
    <footer className="flex items-center justify-center border-t section-dark border-border/60">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="inline-block w-6 h-6 rounded bg-primary" />
            <span className="text-lg">Geotrics</span>
          </div>
          <p className="max-w-sm mt-4 text-sm text-foreground/70">
            Environmental intelligence platform for monitoring deforestation, change detection, and global impact.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#features" className="hover:text-primary">Product</a></li>
              <li><a href="#cta" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><a href="#features" className="hover:text-primary">Features</a></li>
              <li><a href="#map" className="hover:text-primary">Global map</a></li>
              <li><a href="#cta" className="hover:text-primary">Request demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-border/60">
        <div className="container flex flex-col items-center justify-between gap-4 text-xs text-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Mine Guardian</p>
          <p>Built with love for the planet</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;