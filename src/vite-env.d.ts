/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IMAGEKITIO_URL
  readonly VITE_IMAGEKITIO_PUBLIC_KEY
  readonly VITE_IMAGEKITIO_PRIVATE_KEY
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
