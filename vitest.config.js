import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig ({
	test: {
		watch: false,
		globals: true,
		forceRerunTriggers: [...configDefaults.forceRerunTriggers ,'**/*.scss/**']
	}
})
