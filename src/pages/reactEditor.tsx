import React, { useState, useEffect } from 'react'
import '@wangeditor/editor/dist/css/style.css'
import { IDomEditor, IEditorConfig, IToolbarConfig, SlateDescendant } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'

function ReactEditor() {
    // 存储 editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    // 存储 editor 的最新内容（json 格式）
    const [curContent, setCurContent] = useState<SlateDescendant[]>([])

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = { /* 工具栏配置 */ }

    // editor 配置
    const editorConfig: Partial<IEditorConfig> = {}
    editorConfig.placeholder = '请输入内容...'
    editorConfig.onCreated = (editor: IDomEditor) => {
        // 记录 editor 实例，重要 ！
        // 有了 editor 实例，就可以执行 editor API
        setEditor(editor)
    }
    editorConfig.onChange = (editor: IDomEditor) => {
        // editor 选区或者内容变化时，获取当前最新的的 content
        setCurContent(editor.children)
    }
    // 其他编辑器配置
    // 菜单配置

    // 及时销毁 editor ，重要！！！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [])

    return (
        <React.Fragment>
            <div style={{ border: '1px solid #ccc'}}>
                {/* 渲染 toolbar */}
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />

                {/* 渲染 editor */}
                <Editor
                    defaultConfig={editorConfig}
                    defaultContent={[]}
                    mode="default"
                    style={{ height: '500px' }}
                />
            </div>
        </React.Fragment>
    )
}

export default ReactEditor