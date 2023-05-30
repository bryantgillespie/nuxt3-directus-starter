export default function useFiles() {
  const { $config } = useNuxtApp()

  function fileUrl(fileId) {
    return `${$config.public.directusUrl}/assets/${fileId}`
  }

  return {
    fileUrl,
  }
}
