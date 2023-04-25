import {fireEvent, getByText, render, screen, waitFor} from '@testing-library/react'
import { it, describe, expect } from "vitest";
import userEvent from '@testing-library/user-event'

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TemplateTypes } from '../TemplateTypes';
import Integrations from '../../Integrations/Integrations';


describe('Dashboard Templates', () => {
  it('Title testing', () => {
    render(<TemplateTypes setTemplateType={undefined} />)
    expect(screen.getByRole('heading')).toHaveTextContent('Dashboard Templates');
  });

})


const defaultComponent = <Integrations />;

describe('label testing', () => {
    it('should have correct label', () => {
        render(<Integrations />)
        expect(screen.getByText("Facebook Ads")).toBeInTheDocument;
        expect(screen.getByText("Facebook Insiqhts")).toBeInTheDocument;
        expect(screen.getByText("Twitter")).toBeInTheDocument;
        expect(screen.getByText("Custom Data Source")).toBeInTheDocument;
      });
  
})
