import React from 'react';
import './Timeline.css';

export interface TimelineItemProps {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    color?: 'cyan' | 'purple';
    nextColor?: 'cyan' | 'purple';
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, date, description, color = 'cyan', nextColor = 'cyan', isLast }) => {
    return (
        <div className={`timeline-item ${isLast ? 'last' : ''}`}>
            <div className="timeline-marker">
                <div className={`timeline-dot dot-${color}`}></div>
                {!isLast && (
                    <div 
                        className="timeline-line" 
                        style={{ 
                            background: `linear-gradient(to bottom, var(--color-${color}), var(--color-${nextColor}))` 
                        }}
                    ></div>
                )}
            </div>
            <div className="timeline-content">
                <div className="timeline-date">{date}</div>
                <h3 className="timeline-title">{title}</h3>
                <h4 className="timeline-subtitle">{subtitle}</h4>
                <p className="timeline-description">{description}</p>
            </div>
        </div>
    );
};

export interface TimelineProps {
    items: Omit<TimelineItemProps, 'isLast' | 'color' | 'nextColor'>[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="timeline-container">
            {items.map((item, index) => {
                const color = index % 2 === 0 ? 'cyan' : 'purple';
                const nextColor = (index + 1) % 2 === 0 ? 'cyan' : 'purple';
                
                return (
                    <TimelineItem 
                        key={index} 
                        {...item} 
                        color={color}
                        nextColor={nextColor}
                        isLast={index === items.length - 1} 
                    />
                );
            })}
        </div>
    );
};

export default Timeline;
