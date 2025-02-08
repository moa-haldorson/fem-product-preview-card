/// <reference types="vite/client" />

declare module "*.svg" {
  import { ReactComponent } from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}
