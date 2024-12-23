import type { Registry } from './schema'

export const block: Registry = [
  {
    name: 'editor-00',
    type: 'registry:block',
    dependencies: ['lexical', '@lexical/react', 'lucide-react'],
    registryDependencies: ['tooltip'],
    files: [
      {
        path: 'components/blocks/editor-00/editor.tsx',
        target: 'components/blocks/editor-00/editor.tsx',
        type: 'registry:block',
      },
      {
        path: 'components/blocks/editor-00/nodes.ts',
        target: 'components/blocks/editor-00/nodes.ts',
        type: 'registry:block',
      },
      {
        path: 'components/blocks/editor-00/plugins.tsx',
        target: 'components/blocks/editor-00/plugins.tsx',
        type: 'registry:block',
      },
      {
        path: 'components/editor/themes/editor-theme.ts',
        target: 'components/editor/themes/editor-theme.ts',
        type: 'registry:theme',
      },
      {
        path: 'components/editor/themes/editor-theme.css',
        target: 'components/editor/themes/editor-theme.css',
        type: 'registry:theme',
      },
      {
        path: 'components/editor/ui/content-editable.tsx',
        target: 'components/editor/ui/content-editable.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'editor-x',
    type: 'registry:block',
    dependencies: [
      '@excalidraw/excalidraw',
      '@lexical/file',
      '@lexical/react',
      '@lexical/rich-text',
      '@radix-ui/react-icons',
      'katex',
      'lexical',
      'lodash-es',
      'lucide-react',
      'react-colorful',
      'sonner'
    ],
    registryDependencies: [
      'button',
      'checkbox',
      'command',
      'dialog',
      'input',
      'label',
      'popover',
      'scroll-area',
      'select',
      'separator',
      'tabs',
      'textarea',
      'tooltip',
      'toggle',
      'toggle-group',
    ],
    files: [
      {
        path: 'components/blocks/editor-x/editor.tsx',
        target: 'components/blocks/editor-x/editor.tsx',
        type: 'registry:block',
      },
      {
        path: 'components/blocks/editor-x/nodes.ts',
        target: 'components/blocks/editor-x/nodes.ts',
        type: 'registry:block',
      },
      {
        path: 'components/blocks/editor-x/plugins.tsx',
        target: 'components/blocks/editor-x/plugins.tsx',
        type: 'registry:block',
      },
      {
        path: 'components/editor/themes/editor-theme.ts',
        target: 'components/editor/themes/editor-theme.ts',
        type: 'registry:theme',
      },
      {
        path: 'components/editor/themes/editor-theme.css',
        target: 'components/editor/themes/editor-theme.css',
        type: 'registry:theme',
      },
      {
        path: 'components/editor/context/floating-link-context.tsx',
        target: 'components/editor/context/floating-link-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/context/shared-autocomplete-context.tsx',
        target: 'components/editor/context/shared-autocomplete-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/context/toolbar-context.tsx',
        target: 'components/editor/context/toolbar-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/hooks/use-debounce.ts',
        target: 'components/editor/hooks/use-debounce.ts',
        type: 'registry:hook',
      },
      {
        path: 'components/editor/hooks/use-modal.tsx',
        target: 'components/editor/hooks/use-modal.tsx',
        type: 'registry:hook',
      },
      {
        path: 'components/editor/hooks/use-report.ts',
        target: 'components/editor/hooks/use-report.ts',
        type: 'registry:hook',
      },
      {
        path: 'components/editor/hooks/use-update-toolbar.ts',
        target: 'components/editor/hooks/use-update-toolbar.ts',
        type: 'registry:hook',
      },
      {
        path: 'components/editor/nodes/embeds/figma-node.tsx',
        target: 'components/editor/nodes/embeds/figma-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/embeds/tweet-node.tsx',
        target: 'components/editor/nodes/embeds/tweet-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/embeds/youtube-node.tsx',
        target: 'components/editor/nodes/embeds/youtube-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/autocomplete-node.tsx',
        target: 'components/editor/nodes/autocomplete-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/collapsible-container-node.ts',
        target: 'components/editor/nodes/collapsible-container-node.ts',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/collapsible-content-node.ts',
        target: 'components/editor/nodes/collapsible-content-node.ts',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/collapsible-title-node.ts',
        target: 'components/editor/nodes/collapsible-title-node.ts',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/emoji-node.tsx',
        target: 'components/editor/nodes/emoji-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/equation-node.tsx',
        target: 'components/editor/nodes/equation-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/excalidraw-node.tsx',
        target: 'components/editor/nodes/excalidraw-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/image-node.tsx',
        target: 'components/editor/nodes/image-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/inline-image-node.tsx',
        target: 'components/editor/nodes/inline-image-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/keyword-node.tsx',
        target: 'components/editor/nodes/keyword-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/layout-container-node.tsx',
        target: 'components/editor/nodes/layout-container-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/layout-item-node.tsx',
        target: 'components/editor/nodes/layout-item-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/mention-node.ts',
        target: 'components/editor/nodes/mention-node.ts',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/page-break-node.tsx',
        target: 'components/editor/nodes/page-break-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/page-break-node.css',
        target: 'components/editor/nodes/page-break-node.css',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/poll-node.tsx',
        target: 'components/editor/nodes/poll-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/plugins/actions/actions-plugin.tsx',
        target: 'components/editor/plugins/actions/actions-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/character-limit-plugin.tsx',
        target: 'components/editor/plugins/actions/character-limit-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/clear-editor-plugin.tsx',
        target: 'components/editor/plugins/actions/clear-editor-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/edit-mode-toggle-plugin.tsx',
        target: 'components/editor/plugins/actions/edit-mode-toggle-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/import-export-plugin.tsx',
        target: 'components/editor/plugins/actions/import-export-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/markdown-toggle-plugin.tsx',
        target: 'components/editor/plugins/actions/markdown-toggle-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/max-length-plugin.tsx',
        target: 'components/editor/plugins/actions/max-length-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/share-content-plugin.tsx',
        target: 'components/editor/plugins/actions/share-content-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/speech-to-text-plugin.tsx',
        target: 'components/editor/plugins/actions/speech-to-text-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/tree-view-plugin.tsx',
        target: 'components/editor/plugins/actions/tree-view-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/default/lexical-context-menu-plugin.tsx',
        target:
          'components/editor/plugins/default/lexical-context-menu-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/default/lexical-typeahead-menu-plugin.ts',
        target:
          'components/editor/plugins/default/lexical-typeahead-menu-plugin.ts',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/embeds/auto-embed-plugin.tsx',
        target: 'components/editor/plugins/embeds/auto-embed-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/embeds/figma-plugin.tsx',
        target: 'components/editor/plugins/embeds/figma-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/embeds/twitter-plugin.tsx',
        target: 'components/editor/plugins/embeds/twitter-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/embeds/youtube-plugin.tsx',
        target: 'components/editor/plugins/embeds/youtube-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/block-format-data.tsx',
        target:
          'components/editor/plugins/toolbar/block-format/block-format-data.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-bulleted-list.tsx',
        target:
          'components/editor/plugins/toolbar/block-format/format-bulleted-list.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-check-list.tsx',
        target:
          'components/editor/plugins/toolbar/block-format/format-check-list.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-code-block.tsx',
        target:
          'components/editor/plugins/toolbar/block-format/format-code-block.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-heading.tsx',
        target:
          'components/editor/plugins/toolbar/block-format/format-heading.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-numbered-list.tsx',
        target:
          'components/editor/plugins/toolbar/block-format/format-numbered-list.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-paragraph.tsx',
        target:
          'components/editor/plugins/toolbar/block-format/format-paragraph.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-quote.tsx',
        target:
          'components/editor/plugins/toolbar/block-format/format-quote.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-collapsible-container.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-collapsible-container.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-columns-layout.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-columns-layout.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-embeds.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-embeds.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-equation.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-equation.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-excalidraw.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-excalidraw.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-horizontal-rule.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-horizontal-rule.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-image.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-image.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-inline-image.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-inline-image.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-page-break.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-page-break.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-poll.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-poll.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-table.tsx',
        target:
          'components/editor/plugins/toolbar/block-insert/insert-table.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/block-format-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert-plugin.tsx',
        target: 'components/editor/plugins/toolbar/block-insert-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/clear-formatting-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/clear-formatting-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/code-language-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/code-language-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/element-format-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/element-format-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-background-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/font-background-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-color-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/font-color-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-family-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/font-family-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-format-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/font-format-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-size-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/toolbar/font-size-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/history-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/history-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/link-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/link-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/subsuper-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/subsuper-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/auto-link-plugin.tsx',
        target: 'components/editor/plugins/auto-link-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/autocomplete-plugin.tsx',
        target: 'components/editor/plugins/autocomplete-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/code-action-menu-plugin.tsx',
        target: 'components/editor/plugins/code-action-menu-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/code-highlight-plugin.tsx',
        target: 'components/editor/plugins/code-highlight-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/collapsible-plugin.tsx',
        target: 'components/editor/plugins/collapsible-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/component-picker-plugin.tsx',
        target: 'components/editor/plugins/component-picker-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/context-menu-plugin.tsx',
        target: 'components/editor/plugins/context-menu-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/drag-drop-paste-plugin.tsx',
        target: 'components/editor/plugins/drag-drop-paste-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/draggable-block-plugin.tsx',
        target: 'components/editor/plugins/draggable-block-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/emoji-picker-plugin.tsx',
        target: 'components/editor/plugins/emoji-picker-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/emojis-plugin.tsx',
        target: 'components/editor/plugins/emojis-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/equations-plugin.tsx',
        target: 'components/editor/plugins/equations-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/excalidraw-plugin.tsx',
        target: 'components/editor/plugins/excalidraw-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/floating-link-editor-plugin.tsx',
        target: 'components/editor/plugins/floating-link-editor-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/floating-text-format-toolbar-plugin.tsx',
        target:
          'components/editor/plugins/floating-text-format-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/images-plugin.tsx',
        target: 'components/editor/plugins/images-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/inline-image-plugin.tsx',
        target: 'components/editor/plugins/inline-image-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/keywords-plugin.tsx',
        target: 'components/editor/plugins/keywords-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/layout-plugin.tsx',
        target: 'components/editor/plugins/layout-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/link-plugin.tsx',
        target: 'components/editor/plugins/link-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/list-max-indent-level-plugin.tsx',
        target: 'components/editor/plugins/list-max-indent-level-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/mentions-plugin.tsx',
        target: 'components/editor/plugins/mentions-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/page-break-plugin.tsx',
        target: 'components/editor/plugins/page-break-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/poll-plugin.tsx',
        target: 'components/editor/plugins/poll-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/tab-focus-plugin.tsx',
        target: 'components/editor/plugins/tab-focus-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/table-action-menu-plugin.tsx',
        target: 'components/editor/plugins/table-action-menu-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/table-cell-resizer-plugin.tsx',
        target: 'components/editor/plugins/table-cell-resizer-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/table-hover-actions-plugin.tsx',
        target: 'components/editor/plugins/table-hover-actions-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/table-plugin.tsx',
        target: 'components/editor/plugins/table-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/typing-pref-plugin.tsx',
        target: 'components/editor/plugins/typing-pref-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/shared/can-use-dom.ts',
        target: 'components/editor/shared/can-use-dom.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/caret-from-point.ts',
        target: 'components/editor/shared/caret-from-point.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/environment.ts',
        target: 'components/editor/shared/environment.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/invariant.ts',
        target: 'components/editor/shared/invariant.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/normalize-class-names.ts',
        target: 'components/editor/shared/normalize-class-names.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/react-patches.ts',
        target: 'components/editor/shared/react-patches.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/react-test-utils.ts',
        target: 'components/editor/shared/react-test-utils.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/simple-diff-with-cursor.ts',
        target: 'components/editor/shared/simple-diff-with-cursor.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/use-layout-effect.ts',
        target: 'components/editor/shared/use-layout-effect.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/warn-only-once.ts',
        target: 'components/editor/shared/warn-only-once.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/transformers/markdown-emoji-transformer.ts',
        target: 'components/editor/transformers/markdown-emoji-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-equation-transofrmer.ts',
        target:
          'components/editor/transformers/markdown-equation-transofrmer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-hr-transformer.ts',
        target: 'components/editor/transformers/markdown-hr-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-image-transformer.ts',
        target: 'components/editor/transformers/markdown-image-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-table-transformer.ts',
        target: 'components/editor/transformers/markdown-table-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-transformers.ts',
        target: 'components/editor/transformers/markdown-transformers.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-tweet-transformer.ts',
        target: 'components/editor/transformers/markdown-tweet-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/ui/code-button.tsx',
        target: 'components/editor/ui/code-button.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/colorpicker.tsx',
        target: 'components/editor/ui/colorpicker.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/content-editable.tsx',
        target: 'components/editor/ui/content-editable.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/equation-component.tsx',
        target: 'components/editor/ui/equation-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/equation-editor.tsx',
        target: 'components/editor/ui/equation-editor.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/excalidraw-component.tsx',
        target: 'components/editor/ui/excalidraw-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/excalidraw-image.tsx',
        target: 'components/editor/ui/excalidraw-image.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/excalidraw-modal.tsx',
        target: 'components/editor/ui/excalidraw-modal.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/excalidraw.tsx',
        target: 'components/editor/ui/excalidraw.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/image-component.tsx',
        target: 'components/editor/ui/image-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/image-resizer.tsx',
        target: 'components/editor/ui/image-resizer.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/inline-image-component.tsx',
        target: 'components/editor/ui/inline-image-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/katex-equation-alterer.tsx',
        target: 'components/editor/ui/katex-equation-alterer.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/katex-renderer.tsx',
        target: 'components/editor/ui/katex-renderer.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/poll-component.tsx',
        target: 'components/editor/ui/poll-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/poll.css',
        target: 'components/editor/ui/poll.css',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/utils/collapsible.ts',
        target: 'components/editor/utils/collapsible.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/doc-serialization.ts',
        target: 'components/editor/utils/doc-serialization.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/emoji-list.ts',
        target: 'components/editor/utils/emoji-list.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/get-dom-range-rect.ts',
        target: 'components/editor/utils/get-dom-range-rect.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/get-selected-node.ts',
        target: 'components/editor/utils/get-selected-node.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/guard.ts',
        target: 'components/editor/utils/guard.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/is-mobile-width.ts',
        target: 'components/editor/utils/is-mobile-width.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/set-floating-elem-position-for-link-editor.ts',
        target:
          'components/editor/utils/set-floating-elem-position-for-link-editor.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/set-floating-elem-position.ts',
        target: 'components/editor/utils/set-floating-elem-position.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/swipe.ts',
        target: 'components/editor/utils/swipe.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/url.ts',
        target: 'components/editor/utils/url.ts',
        type: 'registry:util',
      },
    ],
  },
]