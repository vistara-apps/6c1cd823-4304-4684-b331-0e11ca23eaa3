'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';
import { formatDuration } from '@/lib/utils';

interface RecordButtonProps {
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

export function RecordButton({ isRecording, onStartRecording, onStopRecording }: RecordButtonProps) {
  const [duration, setDuration] = useState(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDuration(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRecording]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: true, 
        video: true 
      });
      
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      
      recorder.start();
      onStartRecording();
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Unable to access camera/microphone. Please check permissions.');
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
      setMediaRecorder(null);
    }
    onStopRecording();
  };

  return (
    <Card variant="highlighted" className="text-center">
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <span className="text-white font-semibold">One Tap</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white">Record</h3>
        
        {isRecording && (
          <div className="text-white">
            <p className="text-sm opacity-80">Recording in progress</p>
            <p className="text-lg font-mono">{formatDuration(duration)}</p>
          </div>
        )}
        
        <div className="flex justify-center">
          {!isRecording ? (
            <Button
              onClick={handleStartRecording}
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center"
              variant="iconOnly"
            >
              <Mic className="w-8 h-8" />
            </Button>
          ) : (
            <Button
              onClick={handleStopRecording}
              className="w-16 h-16 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center animate-pulse-record"
              variant="iconOnly"
            >
              <Square className="w-8 h-8 fill-current" />
            </Button>
          )}
        </div>
        
        <div className="text-sm text-white opacity-80">
          <p>Camera & Audio</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-xs">📍</span>
            </div>
            <span className="text-xs">GPS by Spanish Consulate</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
