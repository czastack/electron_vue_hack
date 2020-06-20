import { componentInstaller } from '@/lib/utils'

export default {
  install: componentInstaller(require.context('./', false, /\.vue$/))
}
