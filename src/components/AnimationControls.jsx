import './AnimationControls.css';

export default function AnimationControls({ animation, onAnimationChange }) {
  const animations = [
    { id: 'dance', label: '💃 댄싱', color: '#FF6B9D' },
    { id: 'wiggle', label: '🎵 흔들기', color: '#FFB88C' },
    { id: 'jump', label: '⬆️ 점프', color: '#FF9F5A' },
    { id: 'spin', label: '🌀 회전', color: '#9D84B7' },
    { id: 'bounce', label: '⏏️ 튕기기', color: '#85C1E2' },
  ];

  return (
    <div className="animation-controls">
      <h2 className="controls-title">고양이 동작 선택</h2>
      <div className="button-group">
        {animations.map((anim) => (
          <button
            key={anim.id}
            onClick={() => onAnimationChange(anim.id)}
            className={`control-button ${animation === anim.id ? 'active' : ''}`}
            style={{
              backgroundColor: animation === anim.id ? anim.color : 'rgba(255, 255, 255, 0.2)',
              color: animation === anim.id ? 'white' : 'rgba(255, 255, 255, 0.8)',
              border: `2px solid ${anim.color}`,
            }}
          >
            {anim.label}
          </button>
        ))}
      </div>
    </div>
  );
}
