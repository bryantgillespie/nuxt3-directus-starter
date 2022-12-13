export default function useFiles() {
  const { $config } = useNuxtApp()

  function fileUrl(fileId: string) {
    return `${$config.directusUrl}/assets/${fileId}`
  }

  return {
    fileUrl,
  }
}
