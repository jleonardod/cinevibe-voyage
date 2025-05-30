import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MoodSelector from "../components/MoodSelector"
import axios from "axios"

jest.mock('axios')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

describe('MoodSelector', () => {
  const mockOnPlanGenerated = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    const localStorageMock = {
      getItem: jest.fn(() => '[]'),
      setItem: jest.fn()
    }
    Object.defineProperty(window, 'localStorage', {value: localStorageMock})
  })

  test('renderiza el contenido correctamente', () => {
    render(
      <MemoryRouter>
        <MoodSelector onPlanGenerated={mockOnPlanGenerated} />
      </MemoryRouter>
    )

    expect(screen.getByLabelText('¿Cómo te sientes?')).toBeInTheDocument()
    expect(screen.getByLabelText('Género preferido')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Generar Plan/i })).toBeInTheDocument()
  })

  test('muestra alerta si no se selecciona estado de ánimo o género', () => {
    window.alert = jest.fn()
    render(
      <MemoryRouter>
        <MoodSelector onPlanGenerated={mockOnPlanGenerated} />
      </MemoryRouter>
    )

    const button = screen.getByRole('button', {name: /Generar Plan/i})
    fireEvent.click(button)

    expect(window.alert).toHaveBeenCalledWith("Por favor selecciona un estado de ánimo y un género.")
  })

  test('genera un plan al hacer clic en el botón con valores válidos', async() => {
    axios.get.mockResolvedValue({
      data: {
        results: [
          { id: 1, title: 'Pelicula 1', poster_path: '/path1', release_date: '2023-01-01', overview: 'Descripción' }
        ]
      }
    })

    render(
      <MemoryRouter>
        <MoodSelector onPlanGenerated={mockOnPlanGenerated} />
      </MemoryRouter>
    )

    const moodSelect = screen.getByLabelText('¿Cómo te sientes?')
    const genreSelect = screen.getByLabelText('Género preferido')
    const button = screen.getByRole('button', { name: /Generar Plan/i })

    fireEvent.change(moodSelect, { target: { value: 'Aventurero' } })
    fireEvent.change(genreSelect, { target: { value: '28' } }) // 28 es el ID de acción
    fireEvent.click(button)

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('https://api.themoviedb.org/3/discover/movie'));
      expect(localStorage.setItem).toHaveBeenCalled()
      expect(mockOnPlanGenerated).toHaveBeenCalled()
    })
  })
})
