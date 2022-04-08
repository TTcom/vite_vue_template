
import mock from './mock';
/**
 *	vite插件
 * @param configEnv - 环境
 * @param srcPath - src路径
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(){
  const plugins = [mock];
  return plugins;
}
