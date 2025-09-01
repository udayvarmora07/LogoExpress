import { Download, DownloadIcon, Zap } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function Header({ DownloadIcon }) {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <div className="flex items-center">
        <Zap size={32} color="#F15757" />
        <div className="font-bold text-2xl ml-2">LogoExpressArgoCD</div>
      </div>
      <Button
        className="flex gap-2 items-center"
        onClick={() => DownloadIcon(Date.now())}
      >
        <Download className="h-4 w-4" /> Download{" "}
      </Button>
    </div>
  );
}

export default Header;
