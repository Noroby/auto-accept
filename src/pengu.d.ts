
// function openAssetsFolder(): void
// function openPluginsFolder(): void
// function openDevTools(remote?: boolean): void
function reloadClient(): void
// function restartClient(): void
// var __llver: string

// namespace AuthCallback {
//   function createURL(): string
//   function readResponse(url: string, timeout: number): Promise<string | null>
// }

namespace CommandBar {
  function addAction(action: Action): void
  function show(): void
  function update(): void
}

namespace DataStore {
  function has(key: string): boolean
  function get(key: string, fallback?: any): any
  function set(key: string, value: any): boolean
  function remove(key: string): boolean
}

// namespace Effect {
//   type EffectName = 'mica' | 'acrylic' | 'unified' | 'blurbehind'
//   const current: EffectName | null
//   function apply(name: EffectName): boolean
//   function apply(
//     name: Exclude<EffectName, 'mica'>,
//     options: { color: string },
//   ): boolean
//   function clear(): void
//   function on(
//     event: 'apply',
//     listener: (name: string, options?: object) => any,
//   ): void
//   function on(event: 'clear', listener: () => any): void
//   function off(event: 'apply' | 'clear', listener: () => any): void
// }

namespace Toast {
  function success(message: string): void
}

interface Action {
  id?: string       // (optional) an unique idetifier for the action
  name: string      // action's name
  legend?: string   // (optional) action's note/legend or shortcut key
  tags?: string[]   // (optional) tags or keywords to search
  icon?: string     // (optional) <svg> HTML tag in string
  group?: string    // (optional) group name
  hidden?: boolean  // (optional) hide the action, except for search results
  perform?: (id?: string) => any  // called when the action is executed 
}

// interface PenguRCP {
//   preInit(name: string, callback: () => any)
//   postInit(name: string, callback: (api: any) => any)
//   whenReady(name: string): Promise<any>
//   whenReady(names: string[]): Promise<any[]>
// }

interface PenguContext {
  // readonly rcp: PenguRCP
  readonly socket: PenguSocket
}

interface EventData {
  data: any
  uri: string
  eventType: 'Create' | 'Update' | 'Delete'
}

interface ApiListener {
  (message: EventData): void
}

interface PenguSocket {
  observe(api: string, listener: ApiListener): { disconnect: () => void }
  disconnect(api: string, listener: ApiListener)
}