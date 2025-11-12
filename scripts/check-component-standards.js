#!/usr/bin/env node

/**
 * React 组件规范检查工具
 * 基于 2024-2025 React 最佳实践和 shadcn/ui 规范
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RULES = {
  // TypeScript 规范
  typescript: {
    name: 'TypeScript 类型定义',
    checks: [
      {
        pattern: /interface\s+\w+Props/,
        message: '组件应定义 Props 接口',
        severity: 'warning'
      },
      {
        pattern: /:\s*(React\.)?FC|:\s*React\.ReactElement/,
        message: '避免使用 React.FC，推荐直接函数组件',
        severity: 'info',
        inverse: true
      }
    ]
  },
  
  // Import 规范
  imports: {
    name: 'Import 顺序和别名',
    checks: [
      {
        pattern: /import.*from\s+['"]@\//,
        message: '使用路径别名 @/ 代替相对路径',
        severity: 'info'
      },
      {
        pattern: /import.*\.\.\//,
        message: '建议使用 @/ 别名代替 ../ 相对路径',
        severity: 'warning',
        inverse: true
      }
    ]
  },
  
  // 组件命名
  naming: {
    name: '命名规范',
    checks: [
      {
        pattern: /export\s+default\s+function\s+[A-Z]\w+/,
        message: '组件应使用 PascalCase 命名',
        severity: 'error'
      },
      {
        pattern: /const\s+[a-z]\w+\s*=\s*\(/,
        message: '内部函数使用 camelCase',
        severity: 'info'
      }
    ]
  },
  
  // Hooks 规范
  hooks: {
    name: 'Hooks 使用规范',
    checks: [
      {
        pattern: /use[A-Z]\w+/,
        message: 'Hooks 应以 use 开头',
        severity: 'error'
      },
      {
        pattern: /useState|useEffect|useCallback|useMemo/,
        message: '正确使用 React Hooks',
        severity: 'info'
      }
    ]
  },
  
  // 可访问性
  accessibility: {
    name: '可访问性 (a11y)',
    checks: [
      {
        pattern: /aria-\w+|role=/,
        message: '使用 ARIA 属性提升可访问性',
        severity: 'info'
      },
      {
        pattern: /alt=|aria-label=/,
        message: '图片和按钮应有可访问性标签',
        severity: 'warning'
      }
    ]
  },
  
  // shadcn/ui 规范
  shadcnUI: {
    name: 'shadcn/ui 组件使用',
    checks: [
      {
        pattern: /from\s+['"]@\/components\/ui\//,
        message: '正确引用 shadcn/ui 组件',
        severity: 'info'
      },
      {
        pattern: /className.*cn\(/,
        message: '使用 cn() 工具函数合并类名',
        severity: 'info'
      }
    ]
  }
};

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  const results = {
    file: fileName,
    path: filePath,
    passed: [],
    warnings: [],
    errors: [],
    info: []
  };

  for (const [category, rule] of Object.entries(RULES)) {
    for (const check of rule.checks) {
      const matches = content.match(check.pattern);
      const passed = check.inverse ? !matches : matches;
      
      const result = {
        category: rule.name,
        message: check.message,
        severity: check.severity
      };

      if (check.severity === 'error' && !passed) {
        results.errors.push(result);
      } else if (check.severity === 'warning' && !passed) {
        results.warnings.push(result);
      } else if (passed) {
        results.passed.push(result);
      }
    }
  }

  return results;
}

function analyzeComponents(dir) {
  const componentsDir = path.join(__dirname, '..', dir);
  const files = [];

  function walkDir(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }

  walkDir(componentsDir);
  return files.map(analyzeFile);
}

function printReport(results) {
  console.log('\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║           React 组件规范检查报告                               ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  let totalPassed = 0;
  let totalWarnings = 0;
  let totalErrors = 0;

  for (const result of results) {
    console.log(`\n📄 ${result.file}`);
    console.log(`   路径: ${result.path.replace(process.cwd(), '.')}`);
    
    if (result.errors.length > 0) {
      console.log('\n   ❌ 错误:');
      result.errors.forEach(err => {
        console.log(`      • ${err.message}`);
      });
    }
    
    if (result.warnings.length > 0) {
      console.log('\n   ⚠️  警告:');
      result.warnings.forEach(warn => {
        console.log(`      • ${warn.message}`);
      });
    }
    
    if (result.passed.length > 0) {
      console.log(`\n   ✅ 通过: ${result.passed.length} 项检查`);
    }

    totalPassed += result.passed.length;
    totalWarnings += result.warnings.length;
    totalErrors += result.errors.length;
  }

  console.log('\n\n═══════════════════════════════════════════════════════════════');
  console.log('📊 总体统计');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`✅ 通过: ${totalPassed}`);
  console.log(`⚠️  警告: ${totalWarnings}`);
  console.log(`❌ 错误: ${totalErrors}`);
  console.log(`📁 文件总数: ${results.length}`);
  
  const score = totalPassed / (totalPassed + totalWarnings + totalErrors) * 100;
  console.log(`\n📈 规范得分: ${score.toFixed(1)}%`);
  
  if (score >= 90) {
    console.log('🏆 优秀！组件规范非常好！');
  } else if (score >= 75) {
    console.log('👍 良好！还有一些改进空间。');
  } else if (score >= 60) {
    console.log('⚡ 及格！建议进行优化。');
  } else {
    console.log('🔧 需要改进！请参考最佳实践优化组件。');
  }
  
  console.log('\n');
}

// 运行检查
console.log('🔍 开始检查 React 组件规范...\n');

const componentResults = analyzeComponents('src/components');
const pageResults = analyzeComponents('src/pages');

const allResults = [...componentResults, ...pageResults];
printReport(allResults);

// 输出详细建议
console.log('\n📚 改进建议:');
console.log('═══════════════════════════════════════════════════════════════');
console.log('1. 使用 @/ 路径别名代替相对路径');
console.log('2. 为所有组件定义 TypeScript 接口');
console.log('3. 使用 shadcn/ui 的 cn() 工具合并 className');
console.log('4. 添加 ARIA 属性提升可访问性');
console.log('5. Hooks 应始终在函数顶层调用');
console.log('6. 避免使用 React.FC，直接导出函数组件');
console.log('\n💡 参考文档:');
console.log('   - shadcn/ui: https://ui.shadcn.com');
console.log('   - React Docs: https://react.dev');
console.log('   - TypeScript: https://www.typescriptlang.org/docs/');
console.log('\n');
