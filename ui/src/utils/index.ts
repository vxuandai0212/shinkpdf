export function formatBytes(bytes: any, decimals = 2) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export function validFilename(filename: string) {
  const regex = /^[A-Za-z0-9_\-]*[A-Za-z0-9][A-Za-z0-9_\-\.]*$/
  return regex.test(filename)
}
