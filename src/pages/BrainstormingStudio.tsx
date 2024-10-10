import React, { useState, useRef } from 'react'
import { Stage, Layer, Rect, Circle, Arrow, Text } from 'react-konva'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { PenTool, Code, Save, Share, Download, ZoomIn, ZoomOut, Move, Square, Circle as CircleIcon, ArrowRight, Type } from 'lucide-react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/theme-monokai'

const BrainstormingStudio: React.FC = () => {
  const [pseudoCode, setPseudoCode] = useState('')
  const [shapes, setShapes] = useState<any[]>([])
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const stageRef = useRef<any>(null)

  const handleSave = () => {
    console.log('Saving brainstorming session...')
    // Implement save functionality
  }

  const handleShare = () => {
    console.log('Sharing brainstorming session...')
    // Implement share functionality
  }

  const handleExportImage = () => {
    if (stageRef.current) {
      const uri = stageRef.current.toDataURL()
      const link = document.createElement('a')
      link.download = 'brainstorm-diagram.png'
      link.href = uri
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const addShape = (type: string) => {
    const newShape = {
      id: Date.now(),
      type,
      x: Math.random() * 800,
      y: Math.random() * 600,
      width: 100,
      height: 50,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 2,
      draggable: true,
    }
    setShapes([...shapes, newShape])
  }

  const handleStageClick = (e: any) => {
    if (selectedTool) {
      const pos = e.target.getStage().getPointerPosition()
      let newShape

      switch (selectedTool) {
        case 'rectangle':
          newShape = {
            id: Date.now(),
            type: 'rectangle',
            x: pos.x,
            y: pos.y,
            width: 100,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }
          break
        case 'circle':
          newShape = {
            id: Date.now(),
            type: 'circle',
            x: pos.x,
            y: pos.y,
            radius: 30,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }
          break
        case 'arrow':
          newShape = {
            id: Date.now(),
            type: 'arrow',
            points: [pos.x, pos.y, pos.x + 100, pos.y],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }
          break
        case 'text':
          newShape = {
            id: Date.now(),
            type: 'text',
            x: pos.x,
            y: pos.y,
            text: 'Double click to edit',
            fontSize: 18,
            fill: 'black',
            draggable: true,
          }
          break
        default:
          return
      }

      setShapes([...shapes, newShape])
      setSelectedTool(null)
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Advanced Brainstorming Studio</h1>
      <p className="text-xl text-gray-600">Create complex system designs and data flow diagrams with our powerful tools.</p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <PenTool className="mr-2" /> System Design Canvas
          </h2>
          <div className="border rounded-md overflow-hidden" style={{ height: '600px' }}>
            <TransformWrapper>
              <TransformComponent>
                <Stage
                  width={1600}
                  height={1200}
                  ref={stageRef}
                  onClick={handleStageClick}
                >
                  <Layer>
                    {shapes.map((shape) => {
                      switch (shape.type) {
                        case 'rectangle':
                          return <Rect key={shape.id} {...shape} />
                        case 'circle':
                          return <Circle key={shape.id} {...shape} />
                        case 'arrow':
                          return <Arrow key={shape.id} {...shape} />
                        case 'text':
                          return <Text key={shape.id} {...shape} />
                        default:
                          return null
                      }
                    })}
                  </Layer>
                </Stage>
              </TransformComponent>
            </TransformWrapper>
          </div>
          <div className="flex justify-between mt-4">
            <div className="space-x-2">
              <button onClick={() => setSelectedTool('rectangle')} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                <Square className="w-5 h-5" />
              </button>
              <button onClick={() => setSelectedTool('circle')} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                <CircleIcon className="w-5 h-5" />
              </button>
              <button onClick={() => setSelectedTool('arrow')} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => setSelectedTool('text')} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                <Type className="w-5 h-5" />
              </button>
            </div>
            <div className="space-x-2">
              <button onClick={handleExportImage} className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="mr-2" /> Pseudo Code Editor
          </h2>
          <AceEditor
            mode="python"
            theme="monokai"
            onChange={setPseudoCode}
            name="pseudo-code-editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
            style={{ width: '100%', height: '400px' }}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 flex items-center"
        >
          <Save className="mr-2" /> Save Session
        </button>
        <button
          onClick={handleShare}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center"
        >
          <Share className="mr-2" /> Share Session
        </button>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg mt-8">
        <h3 className="text-2xl font-semibold mb-4">Advanced Features</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Use the toolbar to add rectangles, circles, arrows, and text to your diagram.</li>
          <li>Pan and zoom the canvas to work on large, complex designs.</li>
          <li>Drag and drop components to rearrange your diagram.</li>
          <li>Double-click on text elements to edit their content.</li>
          <li>Export your diagram as a high-resolution image for presentations or documentation.</li>
          <li>Use the Pseudo Code Editor for algorithm design and implementation details.</li>
        </ul>
      </div>
    </div>
  )
}

export default BrainstormingStudio