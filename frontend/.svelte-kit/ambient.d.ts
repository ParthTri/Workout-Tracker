
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const TMUX: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const STARSHIP_SHELL: string;
	export const XDG_SEAT: string;
	export const PT8HOME: string;
	export const BUN_INSTALL: string;
	export const XDG_SESSION_TYPE: string;
	export const EXE: string;
	export const ORPHAN: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const CHR: string;
	export const TERM_PROGRAM_VERSION: string;
	export const NNN_FCOLORS: string;
	export const DESKTOP_SESSION: string;
	export const SYMLINK: string;
	export const FIFO: string;
	export const npm_package_devDependencies_flowbite_svelte: string;
	export const GTK_MODULES: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const NIX_PROFILES: string;
	export const npm_package_scripts_check: string;
	export const NIX_PATH: string;
	export const TMUXIFIER_LAYOUT_PATH: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const LIBVIRT_DEFAULT_URI: string;
	export const OTHER: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const NVM_DIR: string;
	export const REG: string;
	export const npm_package_dependencies_d3: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const GTK_IM_MODULE: string;
	export const ALACRITTY_SOCKET: string;
	export const MISSING: string;
	export const npm_package_type: string;
	export const WINDOWID: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const XDG_SESSION_CLASS: string;
	export const NNN_PLUG: string;
	export const npm_config_registry: string;
	export const ALACRITTY_LOG: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const USERNAME: string;
	export const WINDOWPATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const npm_package_devDependencies_postcss_load_config: string;
	export const LANG: string;
	export const DIR: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const HARDLINK: string;
	export const BLK: string;
	export const LS_COLORS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XMODIFIERS: string;
	export const TERM_PROGRAM: string;
	export const MOZ_USE_XINPUT2: string;
	export const XAUTHORITY: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const NODE_PATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const GDMSESSION: string;
	export const QT_ACCESSIBILITY: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const NIX_SSL_CERT_FILE: string;
	export const GPG_AGENT_INFO: string;
	export const LOCK: string;
	export const XDG_VTNR: string;
	export const QT_IM_MODULE: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_package_devDependencies_flowbite: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const I3SOCK: string;
	export const NNN_FIFO: string;
	export const npm_package_scripts_preview: string;
	export const TMUX_PANE: string;
	export const PNPM_HOME: string;
	export const EDITOR: string;
	export const NVM_RC_VERSION: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		TMUX: string;
		USER: string;
		npm_config_user_agent: string;
		STARSHIP_SHELL: string;
		XDG_SEAT: string;
		PT8HOME: string;
		BUN_INSTALL: string;
		XDG_SESSION_TYPE: string;
		EXE: string;
		ORPHAN: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		CHR: string;
		TERM_PROGRAM_VERSION: string;
		NNN_FCOLORS: string;
		DESKTOP_SESSION: string;
		SYMLINK: string;
		FIFO: string;
		npm_package_devDependencies_flowbite_svelte: string;
		GTK_MODULES: string;
		npm_package_devDependencies_svelte_check: string;
		NIX_PROFILES: string;
		npm_package_scripts_check: string;
		NIX_PATH: string;
		TMUXIFIER_LAYOUT_PATH: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		LIBVIRT_DEFAULT_URI: string;
		OTHER: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		NVM_DIR: string;
		REG: string;
		npm_package_dependencies_d3: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		GTK_IM_MODULE: string;
		ALACRITTY_SOCKET: string;
		MISSING: string;
		npm_package_type: string;
		WINDOWID: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies_autoprefixer: string;
		XDG_SESSION_CLASS: string;
		NNN_PLUG: string;
		npm_config_registry: string;
		ALACRITTY_LOG: string;
		TERM: string;
		XDG_SESSION_ID: string;
		USERNAME: string;
		WINDOWPATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		npm_package_name: string;
		NODE: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		npm_package_devDependencies_postcss_load_config: string;
		LANG: string;
		DIR: string;
		XDG_CURRENT_DESKTOP: string;
		HARDLINK: string;
		BLK: string;
		LS_COLORS: string;
		XDG_SESSION_DESKTOP: string;
		XMODIFIERS: string;
		TERM_PROGRAM: string;
		MOZ_USE_XINPUT2: string;
		XAUTHORITY: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		NODE_PATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		GDMSESSION: string;
		QT_ACCESSIBILITY: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		NIX_SSL_CERT_FILE: string;
		GPG_AGENT_INFO: string;
		LOCK: string;
		XDG_VTNR: string;
		QT_IM_MODULE: string;
		ALACRITTY_WINDOW_ID: string;
		PWD: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		NVM_CD_FLAGS: string;
		XDG_CONFIG_DIRS: string;
		npm_package_devDependencies_flowbite: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		I3SOCK: string;
		NNN_FIFO: string;
		npm_package_scripts_preview: string;
		TMUX_PANE: string;
		PNPM_HOME: string;
		EDITOR: string;
		NVM_RC_VERSION: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
