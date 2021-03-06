/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { HeaderPanel } from '../../components/headerPanel';

let wrapper;
describe('Header Panel Component', () => {
    test('should call the onClick function "all"', () => {
        const mockOnClickFn = jest.fn();
        wrapper = mount(<HeaderPanel onClick={mockOnClickFn} title="ALL REQUESTS" />);
        wrapper.find('#all').simulate(
          'click'
        );
        expect(mockOnClickFn.mock.calls.length).toBe(1);
    });
    test('should call the onClick function "pending"', () => {
        const mockOnClickFn = jest.fn();
        wrapper = mount(<HeaderPanel onClick={mockOnClickFn} title="PENDING REQUESTS" />);
        wrapper.find('#pending').simulate(
          'click'
        );
        expect(mockOnClickFn.mock.calls.length).toBe(1);
    });
    test('should call the onClick function "past"', () => {
        const mockOnClickFn = jest.fn();
        wrapper = mount(<HeaderPanel onClick={mockOnClickFn} title="PAST REQUESTS" />);
        wrapper.find('#past').simulate(
          'click'
        );
        expect(mockOnClickFn.mock.calls.length).toBe(1);
    });
});