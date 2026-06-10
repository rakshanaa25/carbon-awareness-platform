import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AssessmentForm } from '../src/features/tracking/AssessmentForm';

describe('Assessment Form Validation & Interactivity Render Suite', () => {
  it('renders all semantic question input groups to page grid', () => {
    render(<AssessmentForm onSubmit={vi.fn()} />);
    
    expect(screen.getByLabelText(/Primary Transport Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Weekly Distance/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Compute Footprint/i })).toBeInTheDocument();
  });

  it('intercepts execution correctly on verified submission triggers', () => {
    const handlerSpy = vi.fn();
    render(<AssessmentForm onSubmit={handlerSpy} />);
    
    const submitButton = screen.getByRole('button', { name: /Compute Footprint/i });
    fireEvent.click(submitButton);

    expect(handlerSpy).toHaveBeenCalledTimes(1);
  });
});