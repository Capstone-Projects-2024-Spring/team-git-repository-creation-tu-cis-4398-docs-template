import pygame
import sys
import random

# Initialize Pygame
pygame.init()

# Screen dimensions
SCREEN_WIDTH, SCREEN_HEIGHT = 800, 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

# Colors
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)

# Player attributes
player_pos = [SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2]
player_size = [50, 50]
player_vel = [0, 0]
player_acc = [0, 0.5]  # Gravity

# Platform
platforms = [[300, 500, 200, 20]]
for i in range(1, 10):
    platforms.append([random.randint(0, SCREEN_WIDTH - 200), 500 - i * 100, 200, 20])

# Movement flags
moving_left = False
moving_right = False

def handle_platforms():
    # Add a new platform at the top if needed
    if not any(p[1] > 500 for p in platforms):
        platforms.append([random.randint(0, SCREEN_WIDTH - 200), random.randint(50, 150), 200, 20])

    # Remove platforms that have moved off the screen
    for plat in platforms[:]:
        if plat[1] > SCREEN_HEIGHT:
            platforms.remove(plat)

def update_player_position():
    global moving_left, moving_right

    # Update player's horizontal position based on movement flags
    if moving_left:
        player_pos[0] -= 5
    if moving_right:
        player_pos[0] += 5

    # Keep player within screen bounds
    player_pos[0] = max(0, min(SCREEN_WIDTH - player_size[0], player_pos[0]))

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE and player_vel[1] == 0:
                player_vel[1] = -10  # Jump
            if event.key == pygame.K_LEFT:
                moving_left = True
            if event.key == pygame.K_RIGHT:
                moving_right = True
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT:
                moving_left = False
            if event.key == pygame.K_RIGHT:
                moving_right = False

    # Update player and platforms
    player_vel[1] += player_acc[1]
    player_pos[1] += player_vel[1]
    update_player_position()
    handle_platforms()

    # Platform collision detection
    for plat in platforms:
        # Check if player is within platform x bounds and above the platform
        if plat[0] <= player_pos[0] <= plat[0] + plat[2] or plat[0] <= player_pos[0] + player_size[0] <= plat[0] + plat[2]:
            if plat[1] <= player_pos[1] + player_size[1] <= plat[1] + plat[3] + player_vel[1]:
                player_vel[1] = 0
                player_pos[1] = plat[1] - player_size[1]

    # Draw everything
    screen.fill(WHITE)
    pygame.draw.rect(screen, BLUE, (player_pos[0], player_pos[1], player_size[0], player_size[1]))
    for plat in platforms:
        pygame.draw.rect(screen, BLUE, plat)

    pygame.display.flip()
    pygame.time.Clock().tick(60)

pygame.quit()
sys.exit()
