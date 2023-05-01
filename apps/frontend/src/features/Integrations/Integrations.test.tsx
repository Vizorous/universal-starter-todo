import {act, fireEvent, render, screen, waitFor} from '@testing-library/react'
import { it, describe, expect } from "vitest";
import userEvent from '@testing-library/user-event'



import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Integrations from './Integrations';


describe('Dashboard Templates', () => {
    it('Title testing', () => {
      render(<Integrations />)
      expect(screen.getByText('Integrations')).toBeInTheDocument();
    });
})
